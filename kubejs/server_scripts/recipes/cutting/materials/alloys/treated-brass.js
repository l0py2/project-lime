//priority: 8

ServerEvents.recipes(event => {
	const rawPair = global.cutting.createRawPair(
		global.id.SG('treated_brass_ingot'),
		global.id.SG('treated_brass_block'), 9
	);
	
	global.cutting.addRawCuttingRecipe(event, rawPair, global.id.SG('treated_brass_plates'), 1);
	
	global.cutting.addConversionRecipes(
		event,
		global.id.SG('treated_brass_plates'),
		[
			global.id.SG('cut_treated_brass'),
			global.id.SG('treated_brass_tiles'),
			global.id.SG('chiseled_treated_brass_block'),
			global.id.SG('treated_brass_grate')
		]
	);
	
	global.cutting.addBaseVariantTypeRecipes(
		event,
		[
			global.cutting.createBlock('SG', 'treated_brass')
		],
		[
			global.cutting.createBlockVariant('SG', (material) => `cut_${material}`),
			global.cutting.createBlockVariant('SG', (material) => `${material}_tiles`)
		],
		[
			global.cutting.createBlockType('SG', (material) => `${material}_slab`, 2),
			global.cutting.createBlockType('SG', (material) => `${material}_stairs`, 1)
		]
	);
	
	global.cutting.addCuttingRecipe(
		event,
		global.id.SG('treated_brass_grate'),
		global.id.SG('treated_brass_grate_pane'),
		1
	);
});