//priority: 9

global.cutting = {
	createBaseBlock: (mod, name, material) => {
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
	addCuttingGroupRecipes: (event, baseMaterials, variants, types) => {
		for(const baseMaterial of baseMaterials) {
			for(const variant of variants) {
				let baseBlock = global.id[variant.mod](variant.blockFormat(baseMaterial));
				let material = variant.materialFormat(baseMaterial);

				for(const type of types) {
					let resultBlock = global.id[type.mod](`${material}_${type.name}`);

					event.remove({ output: resultBlock, not: { type: global.id.MC('stonecutting') } });

					event.stonecutting(
						Item.of(resultBlock, type.value),
						baseBlock
					);
				}
			}
		}
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
	}
};

ServerEvents.recipes(event => {
	event.remove({ type: global.id.MC('stonecutting') });
});