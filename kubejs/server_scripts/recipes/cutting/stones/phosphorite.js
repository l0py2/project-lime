//priority: 8

ServerEvents.recipes(event => {	
	// Phosphorite
	global.cutting.addConversionRecipes(
		event,
		global.id.SG('phosphorite'),
		[
			global.id.SG('polished_phosphorite'),
			global.id.SG('phosphorite_bricks'),
			global.id.SG('cracked_phosphorite_bricks')
		]
	);
	
	// Phosphorite bricks
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SG', 'phosphorite_bricks', 'phosphorite_brick')],
		[
			global.cutting.createBlockType('SG', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('SG', (material) => `${material}_stairs`, 1),
			global.cutting.createBlockType('SG', (material) => `${material}_wall`, 1)
		]
	);
});