//priority: 49

global.removedItems = global.removedItems.concat([
	global.id.MC('furnace')
]);

global.removedRecipes = global.removedRecipes.concat([
	{ id: global.id.MC('iron_nugget_from_blasting') },
	{ id: global.id.MC('gold_nugget_from_blasting') }
]);

global.inputReplacements = global.inputReplacements.concat([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')]
]);

global.dropReplacements = global.dropReplacements.concat([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')]
]);