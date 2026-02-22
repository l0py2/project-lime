ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.tag.M('ingots/gold'),
		global.id.MC('gold_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SS('gold_plaque'));
});