ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'granite'),
		global.cutting.createBlock('MC', 'diorite'),
		global.cutting.createBlock('MC', 'andesite')
	];
	
	// Raw
	global.cutting.addBaseTypeRecipes(
		event,
		stones,
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall),
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
	
	// Polished
	global.cutting.addBaseVariantTypeRecipes(
		event,
		stones,
		[global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}`)],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
});