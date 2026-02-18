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
	
	let variants = [
		global.cutting.createBlockVariant('MC', (state) => `${state}cut_copper`)
	];
	
	let types = [
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1)
	];

	global.cutting.addBaseVariantTypeRecipes(event, blocks, variants, types);
	global.cutting.addBaseVariantRecipes(event, blocks, variants);
	
	variants = [
		global.cutting.createBlockVariant('CR', (state) => `${state}copper_shingles`, (state) => `${state}copper_shingle`),
		global.cutting.createBlockVariant('CR', (state) => `${state}copper_tiles`, (state) => `${state}copper_tile`)
	];
	
	types = [
		global.cutting.createBlockType('CR', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('CR', (material) => `${material}_stairs`, 1)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, blocks, variants, types);
	global.cutting.addBaseVariantRecipes(event, blocks, variants);
	
	event.shapeless(
		global.id.MC('copper_block'),
		[Item.of(global.tag.M('ingots/copper'), 9)]
	);
	
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/copper'),
		global.id.MC('copper_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_ladder'), 1);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_scaffolding'), 2);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_table_cloth'), 4);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copper_bars'), 1);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SS('copper_plaque'), 1);
});