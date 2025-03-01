// priority: 0

global.id = {
	M: id => `forge:${id}`,
	MC: id => `minecraft:${id}`,
	KJ: id => `kubejs:${id}`,
	CD: id => `culturaldelights:${id}`,
	DF: id => `delightful:${id}`,
	FD: id => `farmersdelight:${id}`,
	BC: id => `brewinandchewin:${id}`
};

global.tag = {
	M: tag => `#forge:${tag}`,
	MC: tag => `#minecraft:${tag}`,
	KJ: tag => `#kubejs:${tag}`,
	CD: tag => `#culturaldelights:${tag}`,
	DF: tag => `#delightful:${tag}`,
	FD: tag => `#farmersdelight:${tag}`,
	BC: tag => `#brewinandchewin:${tag}`
};

global.removedItems = [
	global.id.BC('sweet_berry_jam'),
	global.id.BC('glow_berry_marmalade'),
	global.id.BC('apple_jelly')
];
