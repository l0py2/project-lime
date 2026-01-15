//priority: 8

ServerEvents.recipes(event => {
	const brassBlockValue = 9;
	
	function addBrassCuttingRecipe(result, value) {
		global.cutting.addCuttingRecipe(
			event,
			global.tag.M('ingots/brass'),
			result,
			value
		);
		
		global.cutting.addCuttingRecipe(
			event,
			global.id.CR('brass_block'),
			result,
			value * brassBlockValue
		);
	}
	
	addBrassCuttingRecipe(global.id.CR('brass_bars'), 1);
	addBrassCuttingRecipe(global.id.CR('brass_table_cloth'), 4);
	addBrassCuttingRecipe(global.id.CR('brass_ladder'), 1);
	addBrassCuttingRecipe(global.id.CR('brass_scaffolding'), 2);
});