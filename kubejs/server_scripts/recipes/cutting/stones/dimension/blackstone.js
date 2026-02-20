//priority: 8

ServerEvents.recipes(event => {
	// Blackstone
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'blackstone')],
		[
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'blackstone')],
		[
			global.cutting.createBlockVariant('MC', (material) => `polished_${material}`),
			global.cutting.createBlockVariant('MC', (material) => `polished_${material}_bricks`, (material) => `polished_${material}_brick`)
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	global.cutting.addBaseVariantRecipes(
		event,
		[global.cutting.createBlock('MC', 'blackstone')],
		[
			global.cutting.createBlockVariant('MC', (material) => `polished_${material}`),
			global.cutting.createBlockVariant('MC', (material) => `polished_${material}_bricks`, (material) => `polished_${material}_brick`),
			global.cutting.createBlockVariant('MC', (material) => `cracked_polished_${material}_bricks`),
			global.cutting.createBlockVariant('MC', (material) => `chiseled_polished_${material}`),
			global.cutting.createBlockVariant('SP', (material) => `${material}_tile`)
		]
	);
	
	// Blackstone tile	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'blackstone_tile')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('SP', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
});