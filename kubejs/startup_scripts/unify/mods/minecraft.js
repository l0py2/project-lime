//priority: 1

global.removedItems = global.removedItems.concat([
	'minecraft:furnace'
]);

[
	'wooden',
	'stone',
	'iron',
	'golden',
	'diamond'
].forEach(material => {
	global.removedItems.push(`minecraft:${material}_axe`);
	global.removedItems.push(`minecraft:${material}_pickaxe`);
	global.removedItems.push(`minecraft:${material}_shovel`);
	global.removedItems.push(`minecraft:${material}_hoe`);
});

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