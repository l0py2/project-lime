ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.id.CR('andesite_alloy'),
		global.id.CR('andesite_alloy_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('andesite_bars'), global.cutting.values.wall);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('andesite_table_cloth'), 4);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('andesite_ladder'), global.cutting.values.ladder);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('andesite_scaffolding'), global.cutting.values.slab);
});