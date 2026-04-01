//priority: 98

global.removedItems = [
	global.id.HC('oven'),
	global.id.IM('bamboo_bee'),
	global.id.IM('redstone_mechanism'),
	global.id.IM('redstone_sheep'),
	global.id.SP('createdieselgenerators/sign_post_chip_wood'),
	global.id.SS('createdieselgenerators/item_shelf_chip_wood'),
	global.id.WW('sawmill')
];

global.removedRecipes = [
	{ id: global.id.CK('crafting/dough_1') },
	{ id: global.id.CK('crafting/dough_2') },
	{ id: global.id.CK('crafting/dough_3') },
	{ id: global.id.CR('crafting/appliances/dough') },
	{ id: global.id.DF('food/wheat_dough_from_flour_and_eggs') },
	{ id: global.id.DF('food/wheat_dough_from_flour_and_water') },
	{ id: global.id.JA('create.material_to_plate.zinc') },
	{ type: global.id.WW('sawmill') },
	{ mod: 'ftbquests' },
	{ mod: 'itemfilters' }
];

global.inputReplacements = [];

global.outputReplacements = [];

global.dropReplacements = [];