//priority: 99

global.removedItems = [
	global.id.MC('furnace'),
	global.id.WW('sawmill'),
	global.id.HC('oven'),
	global.id.FD('rope'),
	global.id.CR('dough')
];

global.removedRecipeTypes = [
	global.id.WW('sawmill')
];

global.removedRecipes = [
	global.id.MC('iron_nugget_from_blasting'),
	global.id.MC('gold_nugget_from_blasting'),
	global.id.CC('crafting/dough_1'),
	global.id.CC('crafting/dough_2'),
	global.id.CC('crafting/dough_3'),
	global.id.CR('crafting/appliances/dough'),
	global.id.DF('food/wheat_dough_from_flour_and_eggs'),
	global.id.DF('food/wheat_dough_from_flour_and_water'),
	global.id.FD('wheat_dough_from_egg'),
	global.id.FD('wheat_dough_from_eggs'),
	global.id.FD('wheat_dough_from_water')
];

global.inputReplacements = new Map([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')],
	[global.id.FD('rope'), global.id.SP('rope')]
]);

global.outputReplacements = new Map([
	[global.id.FD('rope'), global.id.SP('rope')],
	[global.id.CR('dough'), global.id.FD('wheat_dough')]
]);

global.dropReplacements = new Map([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')],
	[global.id.FD('rope'), global.id.SP('rope')]
]);