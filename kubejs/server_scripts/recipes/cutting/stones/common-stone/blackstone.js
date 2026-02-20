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
			global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}`),
			global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}_bricks`, (stone) => `polished_${stone}_brick`)
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1)
		]
	);
	
	global.cutting.addBaseVariantRecipes(
		event,
		[global.cutting.createBlock('MC', 'blackstone')],
		[
			global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}`),
			global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}_bricks`, (stone) => `polished_${stone}_brick`),
			global.cutting.createBlockVariant('MC', (stone) => `cracked_polished_${stone}_bricks`),
			global.cutting.createBlockVariant('MC', (stone) => `chiseled_polished_${stone}`),
			global.cutting.createBlockVariant('SP', (stone) => `${stone}_tile`)
		]
	);
	
	// Blackstone tile	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'blackstone_tile')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('SP', (material) => `${material}_wall`, 1)
		]
	);
});