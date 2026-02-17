//priority: 8

ServerEvents.recipes(event => {	
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('end_stone'),
		[
			global.id.MC('end_stone_bricks')
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'end_stone_bricks', 'end_stone_brick')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1)
		]
	);
});