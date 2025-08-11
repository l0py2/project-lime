//priority: 98

global.removedItems = [
	global.id.AA('compressor'),
	global.id.AA('oil_bucket'),
	global.id.FD('rope'),
	global.id.FD('wheat_dough'),
	global.id.PC('sourdough'),
	global.id.PC('wheat_flour'),
	global.id.CA('iron_rod'),
	global.id.AA('iron_plate'),
	global.id.TZ('gun_smith_table'),
	global.id.TZ('workbench_c'),
	global.id.TZ('workbench_b'),
	global.id.TZ('workbench_a')
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
	global.id.PC('explosion_crafting/wheat_flour'),
	global.id.PC('pressure_chamber/wheat_flour'),
	global.id.CR('industrial_iron_block_from_ingots_iron_stonecutting'),
	global.id.AA('iron_rod'),
	global.id.AA('steel_rod')
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
