//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'fine_wood')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, 1)
		]
	);
});