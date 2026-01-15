//priority: 8

ServerEvents.recipes(event => {
	const zincBlockValue = 9;
	
	function addZincCuttingRecipe(result, value) {
		global.cutting.addCuttingRecipe(
			event,
			global.tag.M('ingots/zinc'),
			result,
			value
		);
		
		global.cutting.addCuttingRecipe(
			event,
			global.id.CR('zinc_block'),
			result,
			value * zincBlockValue
		);
	}
	
	addZincCuttingRecipe(global.id.CR('copycat_step'), 4);
	addZincCuttingRecipe(global.id.CR('copycat_panel'), 4);
});