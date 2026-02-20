//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'bricks', 'brick')],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1),
			global.cutting.createBlockType('HC', (material) => `${material}s_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}s_corner_trim`)
		]
	);
	
	event.shaped(
		global.id.MC('bricks'),
		[
			'AA',
			'AA'
		],
		{
			A: global.tag.M('ingots/brick')
		}
	);
});