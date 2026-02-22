//priority: 9

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'fine_wood')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
});