//priority: 8

ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.id.SG('diamond_steel_ingot'),
		global.id.SG('diamond_steel_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SG('diamond_steel_panel'), 1);
	
	global.cutting.addConversionRecipes(
		event,
		global.id.SG('diamond_steel_panel'),
		[
			global.id.SG('chiseled_diamond_steel_block'),
			global.id.SG('diamond_steel_tiles'),
			global.id.SG('cut_diamond_steel'),
			global.id.SG('diamond_steel_pillar'),
			global.id.SG('diamond_steel_grate')
		]
	);
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		[
			global.cutting.createBlock('SG', 'diamond_steel')
		],
		[
			global.cutting.createBlockVariant('SG', (material) => `${material}_tiles`),
			global.cutting.createBlockVariant('SG', (material) => `cut_${material}`)
		],
		[
			global.cutting.createBlockType('SG', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SG', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	global.cutting.addCuttingRecipe(
		event,
		global.id.SG('diamond_steel_panel'),
		global.id.SG('diamond_steel_bars'),
		global.cutting.values.wall
	);
	
	global.cutting.addCuttingRecipe(
		event,
		global.id.SG('diamond_steel_grate'),
		global.id.SG('diamond_steel_grate_pane'),
		global.cutting.values.wall
	);
});