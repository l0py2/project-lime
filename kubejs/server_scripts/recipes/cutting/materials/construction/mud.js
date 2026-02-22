ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('packed_mud'),
		[
			global.id.MC('mud_bricks')
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'mud_bricks', 'mud_brick'),
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	event.shapeless(
		global.id.MC('packed_mud'),
		[
			global.id.MC('mud'),
			global.tag.M('crops/wheat')
		]
	);
});