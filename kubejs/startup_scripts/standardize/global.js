//priority: 98

global.hiddenItems = [
];

global.removedItems = [
	global.id.HC('oven'),
	global.id.SP('createdieselgenerators/sign_post_chip_wood'),
	global.id.SS('createdieselgenerators/item_shelf_chip_wood')
];

global.removedRecipes = [
	{ id: global.id.JA('create.material_to_plate.zinc') },
	{ mod: 'ftbquests' },
	{ mod: 'itemfilters' }
];

global.inputReplacements = [];

global.outputReplacements = [];

global.dropReplacements = [];

global.itemTagReplacements = [
	[global.id.M('wires/aluminum'), global.id.M('wires/iron')],
	[global.id.M('wires/electrum'), global.id.M('wires/gold')],
	[global.id.M('plates/aluminum'), global.id.M('plates/iron')]
];