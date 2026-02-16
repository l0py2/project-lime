//priority: 8

ServerEvents.recipes(event => {	
	global.cutting.addConversionRecipes(
		event, 
		global.id.MC('basalt'),
		[
			global.id.MC('smooth_basalt'),
			global.id.MC('polished_basalt')
		]
	);
});