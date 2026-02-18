//priority: 8

ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/zinc'),
		global.id.CR('zinc_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copycat_step'), 4);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('copycat_panel'), 4);
});