//priority: 9

ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('cobblestone'),
		[
			global.id.MC('mossy_cobblestone'),
			global.id.MC('stone')
		]
	);
	
	// Stone
	const stones = [
		global.cutting.createBlock('MC', 'stone')
	];
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		stones,
		[
			global.cutting.createBlockVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
			global.cutting.createBlockVariant('MC', (material) => `mossy_${material}_bricks`, (material) => `mossy_${material}_brick`)
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	global.cutting.addBaseVariantRecipes(
		event,
		stones,
		[
			global.cutting.createBlockVariant('MC', (material) => `chiseled_${material}_bricks`),
			global.cutting.createBlockVariant('MC', (material) => `smooth_${material}`),
			global.cutting.createBlockVariant('SP', (material) => `${material}_tile`)
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		stones,
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
	
	// Stone tile	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'stone_tile')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('SP', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	// Smooth stone
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'smooth_stone')], 
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab)
		]
	);
});