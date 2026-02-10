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
	createBlockType: (mod, name, value) => {
		return {
			mod: mod,
			name: name,
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
	addCuttingConversionRecipes: (event, blocks) => {
		for(let i = 0; i < blocks.length; i++) {
			event.remove({ output: blocks[i], not: { type: global.id.MC('stonecutting') } });

			// Blocks before the current
			for(let j = 0; j < i; j++) {
				event.stonecutting(
					blocks[i],
					blocks[j]
				);
			}

			// Blocks after ther current
			for(let j = i + 1; j < blocks.length; j++) {
				event.stonecutting(
					blocks[i],
					blocks[j]
				);
			}
		}
	},
	addBaseVariantTypeRecipes: (event, bases, variants, types) => {
		for(const base of bases) {
			for(const variant of variants) {
				let variantBlock = global.id[variant.mod](variant.blockFormat(base.material));
				
				for(const type of types) {
					let typeBlock = global.id[type.mod](`${variant.materialFormat(base.material)}_${type.name}`);
					global.cutting.addCuttingRecipe(event, variantBlock, typeBlock, type.value);
				}
			}
		}
	},
	addBaseVariantRecipes: (event, bases, variants) => {
		for(const base of bases) {
			let conversions = [
				global.id[base.mod](base.name)
			];
			
			for(const variant of variants) {
				conversions.push(global.id[variant.mod](variant.blockFormat(base.material)));
			}
			
			global.cutting.addCuttingConversionRecipes(event, conversions);
		}
	},
	addBaseTypeRecipes: (event, bases, types) => {
		for(const base of bases) {
			let baseBlock = global.id[base.mod](base.name);
			
			for(const type of types) {
				let typeBlock = global.id[type.mod](`${base.material}_${type.name}`);
				global.cutting.addCuttingRecipe(event, baseBlock, typeBlock, type.value);
			}
		}
	}
};

ServerEvents.recipes(event => {
	event.remove({ type: global.id.MC('stonecutting') });
});