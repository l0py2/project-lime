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
	
	const types = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, stones, variants, types);
	global.cutting.addBaseVariantRecipes(event, stones, allVariants);
	global.cutting.addBaseTypeRecipes(event, stones, types);
});