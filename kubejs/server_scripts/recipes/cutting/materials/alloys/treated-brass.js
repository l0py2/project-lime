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
	
	global.cutting.addBaseTypeRecipes(
		event,
		[
			global.cutting.createBlock('SG', 'cut_treated_brass'),
			global.cutting.createBlock('SG', 'treated_brass_tiles')
		],
		[
			global.cutting.createBlockType('SG', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('SG', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
	
	global.cutting.addCuttingRecipe(event, global.id.SG('treated_brass_grate'), global.id.SG('treated_brass_grate_pane'), global.cutting.values.wall);
});