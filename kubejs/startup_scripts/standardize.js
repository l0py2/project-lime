//priority: 99

global.removedItems = [
	global.id.MC('furnace'),
	global.id.WW('sawmill')
];

global.removedRecipeTypes = [
	global.id.MC('smelting'),
	global.id.WW('sawmill')
];

global.removedRecipes = [
	global.id.MC('iron_nugget_from_blasting'),
	global.id.MC('gold_nugget_from_blasting')
];

global.inputReplacements = new Map([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')]
]);

global.outputReplacements = new Map([
]);

global.dropReplacements = new Map([
]);