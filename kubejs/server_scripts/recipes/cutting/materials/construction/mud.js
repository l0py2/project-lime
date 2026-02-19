//priority: 8

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
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1)
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