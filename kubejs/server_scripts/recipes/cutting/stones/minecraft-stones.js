//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'granite'),
		global.cutting.createBlock('MC', 'diorite'),
		global.cutting.createBlock('MC', 'andesite')
	];
	
	const variants = [
		global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}`)
	];
	
	let allVariants = [];
	allVariants = allVariants.concat(variants);
	
	let types = [
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, stones, variants, types);
	global.cutting.addBaseVariantRecipes(event, stones, allVariants);
	
	types = [
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
		global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall),
		global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
		global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
});