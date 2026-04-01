//priority: 97

global.removedItems = global.removedItems.concat([
	global.id.SG('air_canister'),
	global.id.SG('lightning_battery'),
	global.id.SG('powered_macerator'),
	global.id.SG('powered_mechanical_press'),
	global.id.SG('reinforced_air_canister')
]);

global.removedRecipes = global.removedRecipes.concat([
	{ type: global.id.SG('powered_macerating') },
	{ type: global.id.SG('powered_mechanical_pressing') },
	{ type: global.id.SG('lightning_battery') }
]);

global.inputReplacements = global.inputReplacements.concat([
	[global.id.SG('lightning_battery'), global.id.PG('battery')]
]);