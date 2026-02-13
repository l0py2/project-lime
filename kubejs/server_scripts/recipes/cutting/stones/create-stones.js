//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'granite'),
		global.cutting.createBlock('MC', 'diorite'),
		global.cutting.createBlock('MC', 'andesite'),
		global.cutting.createBlock('MC', 'calcite'),
		global.cutting.createBlock('MC', 'dripstone_block', 'dripstone'),
		global.cutting.createBlock('MC', 'deepslate'),
		global.cutting.createBlock('MC', 'tuff'),
		global.cutting.createBlock('CR', 'asurine'),
		global.cutting.createBlock('CR', 'crimsite'),
		global.cutting.createBlock('CR', 'limestone'),
		global.cutting.createBlock('CR', 'ochrum'),
		global.cutting.createBlock('CR', 'scoria'),
		global.cutting.createBlock('CR', 'scorchia'),
		global.cutting.createBlock('CR', 'veridium')
	];
	
	const variants = [
		global.cutting.createBlockVariant('CR', (stone) => `cut_${stone}`),
		global.cutting.createBlockVariant('CR', (stone) => `polished_cut_${stone}`),
		global.cutting.createBlockVariant('CR', (stone) => `cut_${stone}_bricks`, (stone) => `cut_${stone}_brick`),
		global.cutting.createBlockVariant('CR', (stone) => `small_${stone}_bricks`, (stone) => `small_${stone}_brick`)
	];
	
	let allVariants = [
		global.cutting.createBlockVariant('CR', (stone) => `layered_${stone}`),
		global.cutting.createBlockVariant('CR', (stone) => `${stone}_pillar`)
	];
	allVariants = allVariants.concat(variants);
	
	const types = [
		global.cutting.createBlockType('CR', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('CR', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('CR', (material) => `${material}_wall`, 1)
	];
	
	global.cutting.addBaseVariantTypeRecipes(event, stones, variants, types);
	global.cutting.addBaseVariantRecipes(event, stones, allVariants);
});