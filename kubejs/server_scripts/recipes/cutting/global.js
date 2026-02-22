//priority: 98

const logValue = 6; // Cutting planks crafting recipe
const manualLogValue = 4; // Default planks crafting recipe

global.cutting = {
	values: {
		slab: 2,
		stairs: 1,
		wall: 1,
		sign: 1,
		door: 1,
		trapdoor: 2,
		ladder: 4
	},
	createBlock: (mod, name, material) => {
		return {
			mod: mod,
			name: name,
			material: material == undefined ? name : material
		};
	},
	createBlockVariant: (mod, blockFormat, materialFormat) => {
		return {
			mod: mod,
			blockFormat: blockFormat,
			materialFormat: materialFormat == undefined ? blockFormat : materialFormat
		};
	},
	createBlockType: (mod, nameFormat, value) => {
		return {
			mod: mod,
			nameFormat: nameFormat,
			value: value == undefined ? 1 : value
		};
	},
	createRawPair: (material, materialBlock, blockValue) => {
		return {
			material: material,
			materialBlock: materialBlock,
			blockValue: blockValue
		};
	},
	addCuttingRecipe: (event, input, output, count) => {
		event.remove({ output: output, type: global.id.MC('crafting_shaped') });
		event.remove({ output: output, type: global.id.MC('crafting_shapeless') });
		event.remove({ output: output, type: global.id.MC('smelting') });
		event.remove({ output: output, type: global.id.MC('blasting') });
		event.stonecutting(
			Item.of(output, count == undefined ? 1 : count),
			input
		);
	},
	addRawCuttingRecipe: (event, rawPair, result, count) => {
		const value = count == undefined ? 1 : count;
		
		global.cutting.addCuttingRecipe(
			event,
			rawPair.material,
			result,
			value
		);
		
		global.cutting.addCuttingRecipe(
			event,
			rawPair.materialBlock,
			result,
			value * rawPair.blockValue
		);
	},
	addConversionRecipes: (event, base, blocks) => {
		for(const block of blocks) {
			global.cutting.addCuttingRecipe(event, base, block, 1);
			global.cutting.addCuttingRecipe(event, block, base, 1);
		}
	},
	addBaseVariantTypeRecipes: (event, bases, variants, types) => {
		for(const base of bases) {
			for(const variant of variants) {
				let variantBlock = global.id[variant.mod](variant.blockFormat(base.material));
				
				for(const type of types) {
					let typeBlock = global.id[type.mod](type.nameFormat(variant.materialFormat(base.material)));
					global.cutting.addCuttingRecipe(event, variantBlock, typeBlock, type.value);
				}
			}
		}
		
		global.cutting.addBaseVariantRecipes(event, bases, variants);
	},
	addBaseVariantRecipes: (event, bases, variants) => {		
		for(const base of bases) {
			let baseBlock = global.id[base.mod](base.name);
			let conversions = [];
			
			for(const variant of variants) {
				conversions.push(global.id[variant.mod](variant.blockFormat(base.material)));
			}
			
			global.cutting.addConversionRecipes(event, baseBlock, conversions);
		}
	},
	addBaseTypeRecipes: (event, bases, types) => {
		for(const base of bases) {
			let baseBlock = global.id[base.mod](base.name);
			
			for(const type of types) {
				let typeBlock = global.id[type.mod](type.nameFormat(base.material));
				global.cutting.addCuttingRecipe(event, baseBlock, typeBlock, type.value);
			}
		}
	},
	flora: {
		woodRecipes: (event, logType, woodTypes, blockTypes) => {
			for(const wood of woodTypes) {
				let rawPair = global.cutting.createRawPair(
					global.id.MC(`${wood}_planks`),
					global.tag.MC(`${wood}_${logType}`), logValue
				);
				
				for(const blockType of blockTypes) {
					let result = global.id[blockType.mod](blockType.nameFormat(wood));
					global.cutting.addRawCuttingRecipe(event, rawPair, result, blockType.value);
				}
			}
			
			for(const wood of woodTypes) {		
				global.cutting.addCuttingRecipe(event, global.tag.MC(`${wood}_${logType}`), global.id.MC(`${wood}_planks`), logValue);
				
				event.shapeless(
					Item.of(global.id.MC(`${wood}_planks`), manualLogValue),
					[global.tag.MC(`${wood}_${logType}`)]
				);
			}
		}
	}
};

ServerEvents.recipes(event => {
	event.remove({ type: global.id.MC('stonecutting') });
	event.remove({ type: global.id.CR('cutting') });
});