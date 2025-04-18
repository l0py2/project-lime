// priority: 0

global.id = {
	M: id => `forge:${id}`,
	MC: id => `minecraft:${id}`,
	KJ: id => `kubejs:${id}`,
	CD: id => `culturaldelights:${id}`,
	FD: id => `farmersdelight:${id}`,
	BC: id => `brewinandchewin:${id}`,
	SP: id => `supplementaries:${id}`,
	CR: id => `create:${id}`,
	CF: id => `comforts:${id}`,
	SS: id => `sophisticatedstorage:${id}`,
	SB: id => `sophisticatedbackpacks:${id}`,
	DF: id => `delightful:${id}`,
	QK: id => `quark:${id}`,
	DG: id => `createdieselgenerators:${id}`,
	NA: id => `create_new_age:${id}`,
	CA: id => `createaddition:${id}`,
	TZ: id => `tacz:${id}`
};

global.tag = {
	M: tag => `#forge:${tag}`,
	MC: tag => `#minecraft:${tag}`,
	KJ: tag => `#kubejs:${tag}`,
	CD: tag => `#culturaldelights:${tag}`,
	FD: tag => `#farmersdelight:${tag}`,
	BC: tag => `#brewinandchewin:${tag}`,
	SP: tag => `#supplementaries:${tag}`,
	CR: tag => `#create:${tag}`,
	CF: tag => `#comforts:${tag}`,
	SS: tag => `#sophisticatedstorage:${tag}`,
	SB: tag => `#sophisticatedbackpacks:${tag}`,
	DF: tag => `#delightful:${tag}`,
	QK: tag => `#quark:${tag}`,
	DG: tag => `#createdieselgenerators:${tag}`,
	NA: tag => `#create_new_age:${tag}`,
	CA: tag => `#createaddition:${tag}`,
	TZ: tag => `#tacz:${tag}`
};

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
