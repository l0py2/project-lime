//priority: 8

ServerEvents.recipes(event => {
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

	global.cutting.addCuttingGroupRecipes(event, states, vanillaVariants, vanillaTypes);
	global.cutting.addCuttingGroupRecipes(event, states, createVariants, createTypes);

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

	// Vanilla copper block
	copperBlockConversionGroups[0].push(global.id.MC('copper_block'));
	copperBlockConversionGroups[1].push(global.id.MC('exposed_copper'));
	copperBlockConversionGroups[2].push(global.id.MC('weathered_copper'));
	copperBlockConversionGroups[3].push(global.id.MC('oxidized_copper'));
	copperBlockConversionGroups[4].push(global.id.MC('waxed_copper_block'));
	copperBlockConversionGroups[5].push(global.id.MC('waxed_exposed_copper'));
	copperBlockConversionGroups[6].push(global.id.MC('waxed_weathered_copper'));
	copperBlockConversionGroups[7].push(global.id.MC('waxed_oxidized_copper'));

	for(let group of copperBlockConversionGroups) {
		global.cutting.addCuttingConversionRecipes(event, group);
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