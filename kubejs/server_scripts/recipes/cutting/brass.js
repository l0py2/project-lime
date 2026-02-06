//priority: 8

ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/brass'),
		global.id.CR('brass_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_bars'), 1);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_table_cloth'), 4);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_ladder'), 1);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('brass_scaffolding'), 2);
});