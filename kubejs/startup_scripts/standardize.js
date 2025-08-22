//priority: 98

global.removedItems = [
	global.id.AA('compressor'),
	global.id.AA('iron_plate'),
	global.id.AA('iron_rod'),
	global.id.AA('oil_bucket'),
	global.id.AA('steel_ingot'),
	global.id.AA('steel_nugget'),
	global.id.AA('steel_plate'),
	global.id.AA('steel_rod'),
	global.id.CA('electrum_ingot'),
	global.id.CA('electrum_sheet'),
	global.id.CA('electrum_wire'),
	global.id.CA('iron_rod'),
	global.id.FD('rope'),
	global.id.FD('wheat_dough'),
	global.id.IE('nugget_copper'),
	global.id.IE('plate_copper'),
	global.id.IE('plate_gold'),
	global.id.IE('plate_iron'),
	global.id.PC('copper_nugget'),
	global.id.PC('sourdough'),
	global.id.PC('wheat_flour'),
	global.id.TZ('gun_smith_table'),
	global.id.TZ('workbench_a'),
	global.id.TZ('workbench_b'),
	global.id.TZ('workbench_c'),
	global.id.AA('nasa_workbench'),
	global.id.AA('etrionic_blast_furnace'),
	global.id.AA('energizer'),
	global.id.AA('etrionic_capacitor'),
	global.id.AA('fan'),
	global.id.AA('steel_cable'),
	global.id.AA('desh_cable'),
	global.id.AA('desh_fluid_pipe'),
	global.id.AA('ostrum_fluid_pipe'),
	global.id.AA('water_pump')
];

global.removedRecipeTypes = [
	global.id.AA('compressing'),
	global.id.AA('nasa_workbench'),
	global.id.AA('alloying'),
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
	global.id.AA('steel_rod'),
	global.id.AA('steel_engine'),
	global.id.AA('desh_engine'),
	global.id.AA('ostrum_engine'),
	global.id.AA('calorite_engine')
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
