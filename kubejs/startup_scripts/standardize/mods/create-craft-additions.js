//priority: 49

global.removedItems = global.removedItems.concat([
	global.id.CA('alternator'),
	global.id.CA('capacitor'),
	global.id.CA('connector'),
	global.id.CA('copper_spool'),
	global.id.CA('copper_wire'),
	global.id.CA('electric_motor'),
	global.id.CA('electrum_amulet'),
	global.id.CA('electrum_block'),
	global.id.CA('electrum_ingot'),
	global.id.CA('electrum_nugget'),
	global.id.CA('electrum_sheet'),
	global.id.CA('electrum_spool'),
	global.id.CA('electrum_wire'),
	global.id.CA('festive_spool'),
	global.id.CA('gold_spool'),
	global.id.CA('gold_wire'),
	global.id.CA('iron_wire'),
	global.id.CA('large_connector'),
	global.id.CA('modular_accumulator'),
	global.id.CA('portable_energy_interface'),
	global.id.CA('redstone_relay'),
	global.id.CA('seed_oil_bucket'),
	global.id.CA('small_light_connector'),
	global.id.CA('spool'),
	global.id.CA('tesla_coil'),
	global.id.CA('copper_rod'),
	global.id.CA('zinc_sheet'),
	global.id.CA('iron_rod'),
	global.id.CA('gold_rod'),
	global.id.CA('electrum_rod'),
	global.id.CA('brass_rod')
]);

global.removedRecipes = global.removedRecipes.concat([
	{ id: global.id.CA('compacting/seed_oil') }
]);

global.inputReplacements = global.inputReplacements.concat([
	[global.id.CA('copper_spool'), global.id.PG('copper_coil')],
	[global.id.CA('capacitor'), global.id.PG('capacitor')]
]);

global.outputReplacements = global.outputReplacements.concat([
	[global.id.CA('tesla_coil'), global.id.NA('reinforced_energiser')]
]);