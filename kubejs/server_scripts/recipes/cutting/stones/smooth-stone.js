//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'smooth_stone')], 
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2)
		]
	);
});