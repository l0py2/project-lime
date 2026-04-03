//priority: 98

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
	[global.tag.M('wires/aluminum'), global.tag.M('wires/iron')],
	[global.tag.M('wires/electrum'), global.tag.M('wires/gold')]
];