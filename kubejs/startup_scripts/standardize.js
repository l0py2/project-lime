//priority: 98

global.removedItems = [
	global.id.AA('compressor'),
	global.id.FD('rope'),
	global.id.FD('wheat_dough'),
	global.id.PC('sourdough'),
	global.id.PC('wheat_flour')
];

global.removedRecipeTypes = [
	global.id.AA('compressing')
];

global.removedRecipes = [
	global.id.CR('crafting/appliances/dough'),
	global.id.CR('smelting/bread'),
	global.id.CR('smoking/bread'),
	global.id.CR('smoking/bread'),
	global.id.FD('wheat_dough'),
	global.id.MC('bread'),
	global.id.MC('farmersdelight.dough'),
	global.id.PC('explosion_crafting/wheat_flour'),
	global.id.PC('pressure_chamber/wheat_flour')
];

global.inputReplacements = new Map([
	[global.id.FD('rope'), global.tag.M('rope')],
	[global.id.FD('wheat_dough'), global.tag.M('dough/wheat')],
	[global.id.PC('sourdough'), global.tag.M('dough')],
	[global.id.PC('wheat_flour'), global.tag.M('flour')]
]);

global.outputReplacements = new Map([
	[global.id.FD('rope'), global.id.SP('rope')],
	[global.id.FD('wheat_dough'), global.id.CR('dough')],
	[global.id.PC('wheat_flour'), global.id.CR('wheat_dough')]
]);

global.dropReplacements = new Map([
]);
