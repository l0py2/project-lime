//priority: 1

global.removedItems = global.removedItems.concat([
	'minecraft:furnace'
]);

global.removedRecipes = global.removedRecipes.concat([
	{ id: 'minecraft:iron_nugget_from_blasting' },
	{ id: 'minecraft:gold_nugget_from_blasting' }
]);

global.inputReplacements = global.inputReplacements.concat([
	['minecraft:furnace', 'minecraft:blast_furnace']
]);

global.dropReplacements = global.dropReplacements.concat([
	['minecraft:furnace', 'minecraft:blast_furnace']
]);