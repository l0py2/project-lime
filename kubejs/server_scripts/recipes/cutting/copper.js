//priority: 8

ServerEvents.recipes(event => {
	function addCuttingGroupRecipes(baseMaterials, variants, types) {
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
	}
	
	const copperBlockValue = 9;
	
	const states = [
		'',
		'exposed_',
		'weathered_',
		'oxidized_',
		'waxed_',
		'waxed_exposed_',
		'waxed_weathered_',
		'waxed_oxidized_'
	];

	const vanillaVariants = [
		global.cutting.createBlockVariant('MC', (state) => `${state}cut_copper`)
	];

	const createVariants = [
		global.cutting.createBlockVariant('CR', (state) => `${state}copper_shingles`, (state) => `${state}copper_shingle`),
		global.cutting.createBlockVariant('CR', (state) => `${state}copper_tiles`, (state) => `${state}copper_tile`)
	];

	const vanillaTypes = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1)
	];

	const createTypes = [
		global.cutting.createBlockType('CR', 'slab', 2),
		global.cutting.createBlockType('CR', 'stairs', 1)
	];

	addCuttingGroupRecipes(states, vanillaVariants, vanillaTypes);
	addCuttingGroupRecipes(states, createVariants, createTypes);

	const copperBlockConversionGroups = [];

	for(let i = 0; i < states.length; i++) {
		copperBlockConversionGroups.push([]);

		for(const variant of vanillaVariants) {
			copperBlockConversionGroups[i].push(global.id[variant.mod](variant.blockFormat(states[i])));
		}

		for(const variant of createVariants) {
			copperBlockConversionGroups[i].push(global.id[variant.mod](variant.blockFormat(states[i])));
		}
	}

	// Vanilla base copper block
	const baseBlocks = [
		global.id.MC('copper_block'),
		global.id.MC('exposed_copper'),
		global.id.MC('weathered_copper'),
		global.id.MC('oxidized_copper'),
		global.id.MC('waxed_copper_block'),
		global.id.MC('waxed_exposed_copper'),
		global.id.MC('waxed_weathered_copper'),
		global.id.MC('waxed_oxidized_copper')
	];

	for(let i = 0; i < copperBlockConversionGroups.length; i++) {
		global.cutting.addConversionRecipes(event, baseBlocks[i], copperBlockConversionGroups[i]);
	}

	event.shapeless(
		global.id.MC('copper_block'),
		[Item.of(global.tag.M('ingots/copper'), copperBlockValue)]
	);
	
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/copper'),
		global.id.MC('copper_block'), copperBlockValue
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_ladder'), 1);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_scaffolding'), 2);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_table_cloth'), 4);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_bars'), 1);
});