//priority: 8

ServerEvents.recipes(event => {
	// Blackstone
	global.cutting.addConversionRecipes(
		event,
		global.id.SG('asgharian_bricks'),
		[
			global.id.SG('asgharian_pillar'),
			global.id.SG('cracked_asgharian_bricks'),
			global.id.SG('mossy_asgharian_bricks'),
			global.id.SG('chiseled_asgharian_bricks'),
			global.id.SG('polished_asgharian_panel'),
			global.id.SG('asgharian_tiles'),
			global.id.SG('cracked_asgharian_tiles'),
			global.id.SG('mossy_asgharian_tiles')
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SG', 'asgharian_bricks', 'asgharian_brick')],
		[
			global.cutting.createBlockType('SG', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SG', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('SG', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	event.shaped(
		global.id.SG('asgharian_bricks'),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: global.id.MC('stone_bricks'),
			B: global.tag.M('dusts/phosphorus')
		}
	);
});