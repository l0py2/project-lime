//priority: 99

global.removedItems = [
	global.id.MC('furnace'),
	global.id.WW('sawmill'),
	global.id.HC('oven'),
	global.id.FD('rope'),
	global.id.CR('dough'),
	global.id.SG('air_canister'),
	global.id.SG('reinforced_air_canister'),
	global.id.QK('limestone_bricks'),
	global.id.QK('limestone_bricks_slab'),
	global.id.QK('limestone_bricks_stairs'),
	global.id.QK('limestone_bricks_wall')
];

for(const type of global.woodTypes.minecraft) {
	global.removedItems.push(global.id.QK(`${type}_chest`));
	global.removedItems.push(global.id.QK(`${type}_trapped_chest`));
}

for(const type of global.woodTypes.quark) {
	global.removedItems.push(global.id.EC(`abnww/quark/trapped_${type}_chest`));
}

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
	global.id.FD('wheat_dough_from_water'),
	global.id.CR('smoking/bread'),
	global.id.CR('campfire_cooking/bread')
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

for(const type of global.woodTypes.minecraft) {
	global.dropReplacements.set(
		global.id.QK(`${type}_chest`),
		global.id.WW(`${type}_chest`)
	);
	global.dropReplacements.set(
		global.id.QK(`${type}_trapped_chest`),
		global.id.WW(`trapped_${type}_chest`)
	);
}