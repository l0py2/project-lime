// priority: 0

global.id = {
	CA: id => `createaddition:${id}`,
	CN: id => `create_new_age:${id}`,
	CR: id => `create:${id}`,
	EK: id => `magistuarmory:${id}`,
	FD: id => `farmersdelight:${id}`,
	IE: id => `immersiveengineering:${id}`,
	KJ: id => `kubejs:${id}`,
	M: id => `forge:${id}`,
	MC: id => `minecraft:${id}`,
	QK: id => `quark:${id}`,
	SP: id => `supplementaries:${id}`
};

global.tag = {
	M: tag => `#forge:${tag}`
}

global.removedItems = [
	global.id.CA('alternator'),
	global.id.CA('connector'),
	global.id.CA('copper_spool'),
	global.id.CA('electric_motor'),
	global.id.CA('electrum_sheet'),
	global.id.CA('electrum_spool'),
	global.id.CA('festive_spool'),
	global.id.CA('gold_spool'),
	global.id.CA('large_connector'),
	global.id.CA('redstone_relay'),
	global.id.CA('small_light_connector'),
	global.id.CA('spool'),
	global.id.CA('tesla_coil'),
	global.id.CN('electrical_connector'),
	global.id.CN('overcharged_diamond_wire'),
	global.id.CN('overcharged_golden_wire'),
	global.id.CN('overcharged_iron_wire'),
	global.id.FD('rope'),
	global.id.IE('bannerpattern_windmill'),
	global.id.IE('dynamo'),
	global.id.IE('watermill'),
	global.id.IE('waterwheel_segment'),
	global.id.IE('windmill'),
	global.id.IE('windmill_blade'),
	global.id.IE('windmill_sail'),
	global.id.QK('rope')
];
