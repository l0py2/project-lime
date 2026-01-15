//priority: 8

ServerEvents.recipes(event => {
	const andesiteAlloyBlockValue = 9;
	
	function addAndesiteAlloyCuttingRecipe(result, value) {
		global.cutting.addCuttingRecipe(
			event,
			global.id.CR('andesite_alloy'),
			result,
			value
		);
		
		global.cutting.addCuttingRecipe(
			event,
			global.id.CR('andesite_alloy_block'),
			result,
			value * andesiteAlloyBlockValue
		);
	}
	
	addAndesiteAlloyCuttingRecipe(global.id.CR('andesite_bars'), 1);
	addAndesiteAlloyCuttingRecipe(global.id.CR('andesite_table_cloth'), 4);
	addAndesiteAlloyCuttingRecipe(global.id.CR('andesite_ladder'), 1);
	addAndesiteAlloyCuttingRecipe(global.id.CR('andesite_scaffolding'), 2);
});