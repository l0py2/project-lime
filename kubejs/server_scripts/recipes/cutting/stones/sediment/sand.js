ServerEvents.recipes(event => {
	// Sand
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
	
	// Sandstone
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
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall),
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
	
	// Smooth sandstone
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'smooth_sandstone'),
			global.cutting.createBlock('MC', 'smooth_red_sandstone')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	// Cut sandstone
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'cut_sandstone'),
			global.cutting.createBlock('MC', 'cut_red_sandstone')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab)
		]
	);
});