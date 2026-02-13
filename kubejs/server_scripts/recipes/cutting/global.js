//priority: 9

global.cutting = {
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
			value: value
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
		event.remove({ output: output, not: { type: global.id.MC('stonecutting') } });
		event.stonecutting(
			Item.of(output, count == undefined ? 1 : count),
			input
		);
	},
	addRawCuttingRecipe: (event, rawPair, result, value) => {
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
	}
};

ServerEvents.recipes(event => {
	event.remove({ type: global.id.MC('stonecutting') });
});