//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'ash_bricks')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('SP', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
});