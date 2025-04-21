// priority: 1

global.removedItems = [
	global.id.CA('alternator'),
	global.id.CA('electric_motor'),
	global.id.DG('hammer'),
	global.id.DG('mold'),
	global.id.DG('oil_barrel'),
	global.id.DG('sheet_metal_panel'),
	global.id.DG('track_layers_bag'),
	global.id.DG('wire_cutters'),
	global.id.FD('rope'),
	global.id.FD('wheat_dough'),
	global.id.NA('copper_wire'),
	global.id.QK('rope'),
	global.id.DG('huge_diesel_engine'),
	global.id.TZ('gun_smith_table')
];

global.removedRecipeTypes = [
	global.id.CA('charging'),
	global.id.DG('hammering'),
	global.id.DG('wire_cutting'),
	global.id.DG('compression_molding'),
	global.id.DG('casting')
];

global.removedRecipes = [
	global.id.CF('rope_and_nail'),
	global.id.CR('smoking/bread'),
	global.id.MC('cake'),
	global.id.SB('auto_blasting_upgrade_from_auto_smelting_upgrade'),
	global.id.SB('auto_smoking_upgrade_from_auto_smelting_upgrade'),
	global.id.SB('blasting_upgrade_from_smelting_upgrade'),
	global.id.SB('smoking_upgrade_from_smelting_upgrade'),
	global.id.SS('auto_blasting_upgrade_from_auto_smelting_upgrade'),
	global.id.SS('auto_smoking_upgrade_from_auto_smelting_upgrade'),
	global.id.SS('blasting_upgrade_from_smelting_upgrade'),
	global.id.SS('smoking_upgrade_from_smelting_upgrade')
];

global.inputReplacements = new Map([
	[global.id.FD('rope'), global.tag.M('ropes')],
	[global.id.FD('wheat_dough'), global.tag.M('dough/wheat')],
	[global.id.NA('copper_wire'), global.tag.M('wires/copper')]
]);

global.outputReplacements = new Map([
	[global.id.FD('rope'), global.id.SP('rope')],
	[global.id.FD('wheat_dough'), global.id.CR('dough')]
]);

global.tagReplacements = new Map([
]);
