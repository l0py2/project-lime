//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'stone')
	];
	
	const variants = [
		global.cutting.createBlockVariant('MC', (stone) => `${stone}_bricks`, (stone) => `${stone}_brick`),
		global.cutting.createBlockVariant('MC', (stone) => `mossy_${stone}_bricks`, (stone) => `mossy_${stone}_brick`)
	];
	
	let allVariants = [
		global.cutting.createBlockVariant('MC', (stone) => `chiseled_${stone}_bricks`),
		global.cutting.createBlockVariant('MC', (stone) => `smooth_${stone}`)
	];
	allVariants = allVariants.concat(variants);
	
	let types = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1),
		global.cutting.createBlockType('MC', 'wall', 1)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, stones, variants, types);
	global.cutting.addBaseVariantRecipes(event, stones, allVariants);
	
	types = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
	
	global.cutting.addCuttingConversionRecipes(event, [
		global.id.MC('cobblestone'),
		global.id.MC('mossy_cobblestone'),
		global.id.MC('stone')
	]);
});