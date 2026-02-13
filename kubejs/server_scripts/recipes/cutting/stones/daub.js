//priority: 8

ServerEvents.recipes(event => {
	let blocks = [
		global.cutting.createBlock('SP', 'daub'),
		global.cutting.createBlock('SP', 'daub_frame')
	];
	
	const types = [
		global.cutting.createBlockType('SS', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('SS', (material) => `${material}_stairs`, 1)
	];
	
	global.cutting.addBaseTypeRecipes(event, blocks, types);

	global.cutting.addConversionRecipes(
		event,
		global.id.SP('daub_frame'),
		[
			global.id.SP('daub_brace'),
			global.id.SP('daub_cross_brace'),
		]
	);
});