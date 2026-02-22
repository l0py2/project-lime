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
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		stones,
		[
			global.cutting.createBlockVariant('CR', (material) => `cut_${material}`),
			global.cutting.createBlockVariant('CR', (material) => `polished_cut_${material}`),
			global.cutting.createBlockVariant('CR', (material) => `cut_${material}_bricks`, (material) => `cut_${material}_brick`),
			global.cutting.createBlockVariant('CR', (material) => `small_${material}_bricks`, (material) => `small_${material}_brick`)
		],
		[
			global.cutting.createBlockType('CR', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('CR', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('CR', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	global.cutting.addBaseVariantRecipes(
		event,
		stones,
		[
			global.cutting.createBlockVariant('CR', (material) => `layered_${material}`),
			global.cutting.createBlockVariant('CR', (material) => `${material}_pillar`)
		]
	);
});