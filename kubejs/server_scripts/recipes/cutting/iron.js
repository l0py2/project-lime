//priority: 8

ServerEvents.recipes(event => {
	const ironBlockValue = 9;
	
	function addIronCuttingRecipe(result, value) {
		global.cutting.addCuttingRecipe(
			event,
			global.tag.M('ingots/iron'),
			result,
			value
		);
		
		global.cutting.addCuttingRecipe(
			event,
			global.id.MC('iron_block'),
			result,
			value * ironBlockValue
		);
	}
	
	addIronCuttingRecipe(global.id.CR('weathered_iron_block'), 1);
	addIronCuttingRecipe(global.id.CR('industrial_iron_block'), 1);
	addIronCuttingRecipe(global.id.MC('iron_bars'), 1);
});