//priority: 9

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'cobblestone'),
			global.cutting.createBlock('MC', 'mossy_cobblestone'),
			global.cutting.createBlock('MC', 'cobbled_deepslate'),
			global.cutting.createBlock('MC', 'blackstone')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
});