//priority: 100

global.id = {
	M: id => `forge:${id}`,
	MC: id => `minecraft:${id}`,
	KJ: id => `kubejs:${id}`
};

global.tag = {
	M: tag => `#forge:${tag}`,
	MC: tag => `#minecraft:${tag}`,
	KJ: tag => `#kubejs:${tag}`
};
