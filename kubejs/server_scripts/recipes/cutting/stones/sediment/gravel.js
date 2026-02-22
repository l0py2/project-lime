//priority: 9

ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event, 
		global.id.MC('basalt'),
		[
			global.id.SP('gravel_bricks')
		]
	);
});