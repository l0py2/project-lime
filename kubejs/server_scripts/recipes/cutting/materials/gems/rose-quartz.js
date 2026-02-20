//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addCuttingRecipe(
		event,
		global.id.CR('polished_rose_quartz'),
		global.id.CR('rose_quartz_block')
	);
	
	global.cutting.addConversionRecipes(
		event,
		global.id.CR('rose_quartz_block'),
		[
			global.id.CR('rose_quartz_tiles'),
			global.id.CR('small_rose_quartz_tiles')
		]
	);
});