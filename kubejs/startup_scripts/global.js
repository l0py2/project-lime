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
	IE: id => `immersiveengineering:${id}`,
	DG: id => `createdieselgenerators:${id}`,
	NA: id => `create_new_age:${id}`,
	CA: id => `createaddition:${id}`
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
	IE: tag => `#immersiveengineering:${tag}`,
	DG: tag => `#createdieselgenerators:${tag}`,
	NA: tag => `#create_new_age:${tag}`,
	CA: tag => `#createaddition:${tag}`
};

global.removedItems = [
	global.id.BC('sweet_berry_jam'),
	global.id.BC('glow_berry_marmalade'),
	global.id.BC('apple_jelly'),
	global.id.FD('rope'),
	global.id.FD('wheat_dough'),
	global.id.QK('rope'),
	global.id.DG('wire_cutters'),
	global.id.DG('hammer'),
	global.id.DG('mold'),
	global.id.DG('track_layers_bag'),
	global.id.DG('sheet_metal_panel'),
	global.id.DG('oil_barrel'),
	global.id.NA('electrical_connector'),
	global.id.NA('copper_wire'),
	global.id.NA('overcharged_iron_wire'),
	global.id.NA('overcharged_golden_wire'),
	global.id.NA('overcharged_diamond_wire'),
	global.id.CA('electric_motor'),
	global.id.CA('alternator'),
	global.id.CA('connector'),
	global.id.CA('small_light_connector'),
	global.id.CA('large_connector'),
	global.id.CA('redstone_relay'),
	global.id.CA('spool'),
	global.id.CA('copper_spool'),
	global.id.CA('gold_spool'),
	global.id.CA('electrum_spool'),
	global.id.CA('festive_spool'),
	global.id.CA('tesla_coil'),
	global.id.CA('portable_energy_interface'),
	global.id.CA('modular_accumulator')
];

global.removedRecipeTypes = [
	global.id.DG('wire_cutting'),
	global.id.DG('hammering'),
	global.id.CA('charging')
];

global.removedRecipes = [
	global.id.CF('rope_and_nail'),
	global.id.CR('smoking/bread'),
	global.id.MC('cake'),
	global.id.SS('smoking_upgrade_from_smelting_upgrade'),
	global.id.SS('auto_smoking_upgrade_from_auto_smelting_upgrade'),
	global.id.SS('blasting_upgrade_from_smelting_upgrade'),
	global.id.SS('auto_blasting_upgrade_from_auto_smelting_upgrade'),
	global.id.SB('smoking_upgrade_from_smelting_upgrade'),
	global.id.SB('auto_smoking_upgrade_from_auto_smelting_upgrade'),
	global.id.SB('blasting_upgrade_from_smelting_upgrade'),
	global.id.SB('auto_blasting_upgrade_from_auto_smelting_upgrade')
];

global.inputReplacements = new Map([
	[global.id.FD('rope'), global.tag.M('ropes')],
	[global.id.FD('wheat_dough'), global.tag.M('dough/wheat')],
	[global.id.NA('copper_wire'), global.tag.M('wires/copper')],
	[global.id.CA('copper_spool'), global.tag.M('wires/copper')]
]);

global.outputReplacements = new Map([
	[global.id.FD('rope'), global.id.SP('rope')],
	[global.id.FD('wheat_dough'), global.id.CR('dough')]
]);

global.tagReplacements = new Map([
]);
