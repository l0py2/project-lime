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
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('SG', 'cut_treated_iron')
		],
		[
			global.cutting.createBlockType('SG', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SG', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	global.cutting.addCuttingRecipe(event, global.id.SG('treated_iron_plates'), global.id.SG('treated_iron_bars'), global.cutting.values.wall);
	global.cutting.addCuttingRecipe(event, global.id.SG('treated_iron_grate'), global.id.SG('treated_iron_grate_pane'), global.cutting.values.wall);
});