//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addBaseVariantRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'sand'),
			global.cutting.createBlock('MC', 'red_sand')
		],
		[
			global.cutting.createBlockVariant('MC', (material) => `${material}stone`)
		]
	);
	
	global.cutting.addBaseVariantRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'sandstone'),
			global.cutting.createBlock('MC', 'red_sandstone')
		],
		[
			global.cutting.createBlockVariant('MC', (material) => `chiseled_${material}`),
			global.cutting.createBlockVariant('MC', (material) => `smooth_${material}`),
			global.cutting.createBlockVariant('MC', (material) => `cut_${material}`)
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'sandstone'),
			global.cutting.createBlock('MC', 'red_sandstone')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1),
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'smooth_sandstone'),
			global.cutting.createBlock('MC', 'smooth_red_sandstone')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1)
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'cut_sandstone'),
			global.cutting.createBlock('MC', 'cut_red_sandstone')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2)
		]
	);
});