//priority: 97

global.removedItems = global.removedItems.concat([
	global.id.DG('chemical_sprayer'),
	global.id.DG('chemical_sprayer_lighter'),
	global.id.DG('chemical_turret'),
	global.id.DG('chip_wood_beam'),
	global.id.DG('chip_wood_block'),
	global.id.DG('chip_wood_slab'),
	global.id.DG('chip_wood_stairs'),
	global.id.DG('entity_filter'),
	global.id.DG('hammer'),
	global.id.DG('kelp_handle'),
	global.id.DG('mold'),
	global.id.DG('oil_barrel'),
	global.id.DG('sheet_metal_panel'),
	global.id.DG('track_layers_bag'),
	global.id.DG('wire_cutters'),
	global.id.DG('wood_chip')
]);

global.removedRecipes = global.removedRecipes.concat([
	{ type: global.id.DG('compression_molding') },
	{ type: global.id.DG('wire_cutting') },
	{ type: global.id.DG('hammering') },
	{ id: global.id.DG('basin_fermenting/dough') }
]);