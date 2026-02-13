//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'blackstone')
	];
	
	const variants = [
		global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}`),
		global.cutting.createBlockVariant('MC', (stone) => `polished_${stone}_bricks`, (stone) => `polished_${stone}_brick`)
	];
	
	let allVariants = [
		global.cutting.createBlockVariant('MC', (stone) => `cracked_polished_${stone}_bricks`),
		global.cutting.createBlockVariant('MC', (stone) => `chiseled_polished_${stone}`),
		global.cutting.createBlockVariant('SP', (stone) => `${stone}_tile`)
	];
	allVariants = allVariants.concat(variants);
	
	const types = [
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, stones, variants, types);
	global.cutting.addBaseVariantRecipes(event, stones, allVariants);
});