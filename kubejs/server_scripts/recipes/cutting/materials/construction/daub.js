//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('SP', 'daub'),
			global.cutting.createBlock('SP', 'daub_frame')
		],
		[
			global.cutting.createBlockType('SS', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SS', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);

	global.cutting.addConversionRecipes(
		event,
		global.id.SP('daub_frame'),
		[
			global.id.SP('daub_brace'),
			global.id.SP('daub_cross_brace'),
		]
	);
});