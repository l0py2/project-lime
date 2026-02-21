//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('prismarine'),
		[
			global.id.MC('prismarine_bricks')
		]
	);
	
	// Prismarine
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'prismarine')],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	event.shaped(
		global.id.MC('prismarine'),
		[
			'AA',
			'AA'
		],
		{ A: global.tag.M('dusts/prismarine') }
	);
	
	// Prismarine bricks
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'prismarine_bricks', 'prismarine_brick')],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	// Dark prismarine
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'dark_prismarine')],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	event.remove({ id: global.id.MC('dark_prismarine') });
	event.shapeless(
		global.id.MC('dark_prismarine'),
		[
			global.id.MC('prismarine'),
			global.tag.M('dyes/black')
		]
	);
});