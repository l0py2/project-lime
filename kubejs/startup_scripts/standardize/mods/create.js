//priority: 49

global.removedItems = global.removedItems.concat([
	global.id.CR('dough')
]);

global.removedRecipes = global.removedRecipes.concat([
	{ id: global.id.CR('crafting/appliances/dough') },
	{ id: global.id.CR('smoking/bread') },
	{ id: global.id.CR('campfire_cooking/bread') }
]);

global.inputReplacements = global.inputReplacements.concat([
	[global.id.CR('dough'), global.tag.M('dough/wheat')]
]);

global.outputReplacements = global.outputReplacements.concat([
	[global.id.CR('dough'), global.id.FD('wheat_dough')]
]);