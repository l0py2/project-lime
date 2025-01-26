// priority: 0

global.id = {
	CA: id => `createaddition:${id}`,
	CN: id => `create_new_age:${id}`,
	CR: id => `create:${id}`,
	FD: id => `farmersdelight:${id}`,
	KJ: id => `kubejs:${id}`,
	MC: id => `minecraft:${id}`,
	QK: id => `quark:${id}`,
	SP: id => `supplementaries:${id}`,
	IE: id => `immersiveengineering:${id}`,
	EK: id => `magistuarmory:${id}`
};

global.tag = {
	M: tag => `#forge:${tag}`
}

global.removedItems = [
	global.id.CN('electrical_connector'),
	global.id.CN('copper_wire'),
	global.id.CN('overcharged_iron_wire'),
	global.id.CN('overcharged_golden_wire'),
	global.id.CN('overcharged_diamond_wire'),
	global.id.CA('electric_motor'),
	global.id.CA('alternator'),
	global.id.FD('rope'),
	global.id.QK('rope'),
	global.id.IE('waterwheel_segment'),
	global.id.IE('windmill_blade'),
	global.id.IE('windmill_sail'),
	global.id.IE('watermill'),
	global.id.IE('windmill'),
	global.id.IE('dynamo'),
	global.id.IE('bannerpattern_windmill'),
	global.id.EK('steel_ingot'),
	global.id.EK('steel_nugget'),
	global.id.EK('steel_plate'),
	global.id.CR('copper_sheet'),
	global.id.CA('electrum_sheet'),
	global.id.CR('golden_sheet')
];
