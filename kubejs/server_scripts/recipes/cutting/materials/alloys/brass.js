ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/brass'),
		global.id.CR('brass_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_bars'), global.cutting.values.wall);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_table_cloth'), 4);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_ladder'), global.cutting.values.ladder);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_scaffolding'), global.cutting.values.slab);
});