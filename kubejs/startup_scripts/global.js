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
	IE: id => `immersiveengineering:${id}`
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
	IE: tag => `#immersiveengineering:${tag}`
};

global.removedItems = [
	global.id.BC('sweet_berry_jam'),
	global.id.BC('glow_berry_marmalade'),
	global.id.BC('apple_jelly'),
	global.id.FD('rope'),
	global.id.FD('wheat_dough'),
	global.id.QK('rope')
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
	[global.id.FD('wheat_dough'), global.tag.M('dough/wheat')]
]);

global.outputReplacements = new Map([
	[global.id.FD('rope'), global.id.SP('rope')],
	[global.id.FD('wheat_dough'), global.id.CR('dough')]
]);

global.tagReplacements = new Map([
]);
