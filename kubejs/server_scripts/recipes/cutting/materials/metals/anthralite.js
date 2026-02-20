//priority: 8

ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.id.SG('anthralite_ingot'),
		global.id.SG('anthralite_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SG('anthralite_plates'));
	
	global.cutting.addConversionRecipes(
		event,
		global.id.SG('anthralite_plates'),
		[
			global.id.SG('anthralite_tiles'),
			global.id.SG('cut_anthralite'),
			global.id.SG('anthralite_pillar'),
			global.id.SG('chiseled_anthralite_block'),
			global.id.SG('anthralite_grate')
		]
	);
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		[
			global.cutting.createBlock('SG', 'anthralite')
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
		global.id.SG('anthralite_grate'),
		global.id.SG('anthralite_grate_pane'),
		global.cutting.values.wall
	);
});