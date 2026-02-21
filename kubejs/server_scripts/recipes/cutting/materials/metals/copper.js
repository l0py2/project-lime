//priority: 8

ServerEvents.recipes(event => {
	const blocks = [
		global.cutting.createBlock('MC', 'copper_block', ''),
		global.cutting.createBlock('MC', 'exposed_copper', 'exposed_'),
		global.cutting.createBlock('MC', 'weathered_copper', 'weathered_'),
		global.cutting.createBlock('MC', 'oxidized_copper', 'oxidized_'),
		global.cutting.createBlock('MC', 'waxed_copper_block', 'waxed_'),
		global.cutting.createBlock('MC', 'waxed_exposed_copper', 'waxed_exposed_'),
		global.cutting.createBlock('MC', 'waxed_weathered_copper', 'waxed_weathered_'),
		global.cutting.createBlock('MC', 'waxed_oxidized_copper', 'waxed_oxidized_')
	];
	
	// Cut copper
	global.cutting.addBaseVariantTypeRecipes(
		event,
		blocks,
		[
			global.cutting.createBlockVariant('MC', (state) => `${state}cut_copper`)
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	// Copper shingles and tiles
	global.cutting.addBaseVariantTypeRecipes(
		event,
		blocks,
		[
			global.cutting.createBlockVariant('CR', (state) => `${state}copper_shingles`, (state) => `${state}copper_shingle`),
			global.cutting.createBlockVariant('CR', (state) => `${state}copper_tiles`, (state) => `${state}copper_tile`)
		],
		[
			global.cutting.createBlockType('CR', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('CR', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	// Copper
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/copper'),
		global.id.MC('copper_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_ladder'), global.cutting.values.ladder);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_scaffolding'), global.cutting.values.slab);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_table_cloth'), 4);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_bars'), global.cutting.values.wall);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SS('copper_plaque'));
	
	event.shaped(
		global.id.MC('copper_block'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{ A: global.tag.M('ingots/copper') }
	);
});