//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'deepslate')
	];
	
	const variants = [
		global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}`),
		global.cutting.createBlockVariant('MC', (stone) => `${stone}_bricks`, (stone) => `${stone}_brick`),
		global.cutting.createBlockVariant('MC', (stone) => `${stone}_tiles`, (stone) => `${stone}_tile`)
	];
	
	let allVariants = [
		global.cutting.createBlockVariant('MC', (stone) => `chiseled_${stone}`),
		global.cutting.createBlockVariant('MC', (stone) => `cracked_${stone}_bricks`),
		global.cutting.createBlockVariant('MC', (stone) => `cracked_${stone}_tiles`)
	];
	allVariants = allVariants.concat(variants);
	
	const types = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1),
		global.cutting.createBlockType('MC', 'wall', 1)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, stones, variants, types);
	global.cutting.addBaseVariantRecipes(event, stones, allVariants);
});