//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('purpur_block'),
		[
			global.id.MC('purpur_pillar')
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('MC', 'purpur_block', 'purpur'),
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1)
		]
	);
	
	event.shaped(
		global.id.MC('purpur_block'),
		[
			'AA',
			'AA'
		],
		{ A: global.id.MC('popped_chorus_fruit') }
	);
});