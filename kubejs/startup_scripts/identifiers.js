//priority: 100

global.id = {
	MC: id => `minecraft:${id}`,
	M: id => `forge:${id}`,
	KJ: id => `kubejs:${id}`,
	CR: id => `create:${id}`,
	WW: id => `woodworks:${id}`
};

global.tag = {
	MC: id => `#minecraft:${id}`,
	M: id => `#forge:${id}`,
	KJ: id => `#kubejs:${id}`,
	CR: id => `#create:${id}`,
	WW: id => `#woodworks:${id}`
};