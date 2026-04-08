//priority: 49

global.removedItems = global.removedItems.concat([
	global.id.FD('rope')
]);

global.removedRecipes = global.removedRecipes.concat([
	{ id: global.id.FD('wheat_dough_from_egg') },
	{ id: global.id.FD('wheat_dough_from_eggs') },
	{ id: global.id.FD('wheat_dough_from_water') }
]);

global.inputReplacements = global.inputReplacements.concat([
	[global.id.FD('rope'), global.tag.M('rope')]
]);

global.outputReplacements = global.outputReplacements.concat([
	[global.id.FD('rope'), global.id.SP('rope')]
]);

global.dropReplacements = global.dropReplacements.concat([
	[global.id.FD('rope'), global.id.SP('rope')]
]);