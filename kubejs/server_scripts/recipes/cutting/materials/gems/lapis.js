//priority: 8

ServerEvents.recipes(event => {	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'lapis_bricks')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('SP', (material) => `${material}_wall`, 1)
		]
	);
});