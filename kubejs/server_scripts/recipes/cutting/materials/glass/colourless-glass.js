ServerEvents.recipes(event => {	
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('glass'),
		[
			global.id.CR('tiled_glass'),
			global.id.CR('framed_glass'),
			global.id.CR('horizontal_framed_glass'),
			global.id.CR('vertical_framed_glass')
		]
	);
	
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('glass_pane'),
		[
			global.id.CR('tiled_glass_pane'),
			global.id.CR('framed_glass_pane'),
			global.id.CR('horizontal_framed_glass_pane'),
			global.id.CR('vertical_framed_glass_pane')
		]
	);
});