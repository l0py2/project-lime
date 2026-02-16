//priority: 8

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
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1)
		]
	);
});