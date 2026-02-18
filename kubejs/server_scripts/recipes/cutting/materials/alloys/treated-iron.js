//priority: 8

ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.id.SG('treated_iron_ingot'),
		global.id.SG('treated_iron_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SG('treated_iron_plates'), 1);
	
	global.cutting.addConversionRecipes(
		event,
		global.id.SG('treated_iron_plates'),
		[
			global.id.SG('chiseled_treated_iron_block'),
			global.id.SG('cut_treated_iron'),
			global.id.SG('treated_iron_grate')
		]
	);
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		[
			global.cutting.createBlock('SG', 'treated_iron')
		],
		[
			global.cutting.createBlockVariant('SG', (material) => `cut_${material}`)
		],
		[
			global.cutting.createBlockType('SG', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('SG', (material) => `${material}_stairs`, 1)
		]
	);
	
	global.cutting.addCuttingRecipe(
		event,
		global.id.SG('treated_iron_plates'),
		global.id.SG('treated_iron_bars'),
		1
	);
	
	global.cutting.addCuttingRecipe(
		event,
		global.id.SG('treated_iron_grate'),
		global.id.SG('treated_iron_grate_pane'),
		1
	);
});