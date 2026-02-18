//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('quartz_block'),
		[
			global.id.MC('chiseled_quartz_block'),
			global.id.MC('quartz_bricks'),
			global.id.MC('quartz_pillar'),
			global.id.MC('smooth_quartz')
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'quartz_block', 'quartz'),
			global.cutting.createBlock('MC', 'smooth_quartz')
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1)
		]
	);
	
	event.shaped(
		global.id.MC('quartz_block'),
		[
			'AA',
			'AA'
		],
		{ A: global.tag.M('gems/quartz') }
	);
});