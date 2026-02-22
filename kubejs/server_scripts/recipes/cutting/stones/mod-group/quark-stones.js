ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('QK', 'shale'),
		global.cutting.createBlock('QK', 'jasper')
	];
	
	global.cutting.addBaseTypeRecipes(
		event,
		stones,
		[
			global.cutting.createBlockType('QK', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('QK', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('QK', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		stones,
		[
			global.cutting.createBlockVariant('QK', (material) => `${material}_bricks`),
			global.cutting.createBlockVariant('QK', (material) => `polished_${material}`)
		],
		[
			global.cutting.createBlockType('QK', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('QK', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('QK', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	global.cutting.addBaseVariantRecipes(
		event,
		stones,
		[
			global.cutting.createBlockVariant('QK', (material) => `chiseled_${material}_bricks`),
			global.cutting.createBlockVariant('QK', (material) => `${material}_pillar`)
		]
	);
});