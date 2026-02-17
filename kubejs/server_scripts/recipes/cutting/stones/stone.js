//priority: 8

ServerEvents.recipes(event => {
	// Stone
	let stones = [
		global.cutting.createBlock('MC', 'stone')
	];
	
	const variants = [
		global.cutting.createBlockVariant('MC', (stone) => `${stone}_bricks`, (stone) => `${stone}_brick`),
		global.cutting.createBlockVariant('MC', (stone) => `mossy_${stone}_bricks`, (stone) => `mossy_${stone}_brick`)
	];
	
	let allVariants = [
		global.cutting.createBlockVariant('MC', (stone) => `chiseled_${stone}_bricks`),
		global.cutting.createBlockVariant('MC', (stone) => `smooth_${stone}`),
		global.cutting.createBlockVariant('SP', (stone) => `${stone}_tile`)
	];
	allVariants = allVariants.concat(variants);
	
	let types = [
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, stones, variants, types);
	global.cutting.addBaseVariantRecipes(event, stones, allVariants);
	
	types = [
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
	
	global.cutting.addConversionRecipes(event, global.id.MC('cobblestone'), [
		global.id.MC('mossy_cobblestone'),
		global.id.MC('stone')
	]);
	
	// Stone tile	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'stone_tile')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('SP', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('SP', (material) => `${material}_wall`, 1)
		]
	);
	
	// Smooth stone
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'smooth_stone')], 
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2)
		]
	);
});