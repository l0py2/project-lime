//priority: 9

ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/iron'),
		global.id.MC('iron_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('weathered_iron_block'));
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.CR('industrial_iron_block'));
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.MC('iron_bars'), global.cutting.values.wall);
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SS('iron_plaque'));
});