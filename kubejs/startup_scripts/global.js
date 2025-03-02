// priority: 0

global.id = {
	M: id => `c:${id}`,
	MC: id => `minecraft:${id}`,
	KJ: id => `kubejs:${id}`,
	CD: id => `culturaldelights:${id}`,
	FD: id => `farmersdelight:${id}`,
	BC: id => `brewinandchewin:${id}`,
	SP: id => `supplementaries:${id}`,
	CR: id => `create:${id}`
};

global.tag = {
	M: tag => `#c:${tag}`,
	MC: tag => `#minecraft:${tag}`,
	KJ: tag => `#kubejs:${tag}`,
	CD: tag => `#culturaldelights:${tag}`,
	FD: tag => `#farmersdelight:${tag}`,
	BC: tag => `#brewinandchewin:${tag}`,
	SP: tag => `#supplementaries:${tag}`,
	CR: tag => `#create:${tag}`
};

global.removedItems = [
	global.id.BC('sweet_berry_jam'),
	global.id.BC('glow_berry_marmalade'),
	global.id.BC('apple_jelly'),
	global.id.FD('rope'),
	global.id.FD('wheat_dough')
];

global.replacements = new Map([
	[global.id.FD('rope'), global.tag.M('ropes')],
	[global.id.FD('wheat_dough'), global.tag.M('doughs/wheat')]
]);

global.tagReplacements = new Map([
	[global.tag.M('foods/dough'), global.tag.M('doughs')]
]);
