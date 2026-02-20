//priority: 8

ServerEvents.recipes(event => {
	// Nether bricks
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('nether_bricks'),
		[
			global.id.MC('cracked_nether_bricks'),
			global.id.MC('chiseled_nether_bricks')
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'nether_bricks', 'nether_brick'),
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall),
			global.cutting.createBlockType('MC', (material) => `${material}_fence`, global.cutting.values.wall)
		]
	);
	
	event.shaped(
		global.id.MC('nether_bricks'),
		[
			'AA',
			'AA'
		],
		{ A: global.tag.M('ingots/nether_brick') }
	);
	
	// Red nether bricks
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'red_nether_bricks', 'red_nether_brick'),
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	event.shaped(
		global.id.MC('red_nether_bricks'),
		[
			'AB',
			'BA'
		],
		{
			A: global.tag.M('ingots/nether_brick'),
			B: global.tag.M('crops/nether_wart')
		}
	);
});