//priority: 97

global.removedItems = global.removedItems.concat([
	global.id.QK('limestone_bricks'),
	global.id.QK('limestone_bricks_slab'),
	global.id.QK('limestone_bricks_stairs'),
	global.id.QK('limestone_bricks_wall')
]);

for(const type of global.woodTypes.minecraft) {
	global.removedItems.push(global.id.QK(`${type}_chest`));
	global.removedItems.push(global.id.QK(`${type}_trapped_chest`));
}

for(const type of global.woodTypes.minecraft) {
	global.dropReplacements.push([
		global.id.QK(`${type}_chest`),
		global.id.WW(`${type}_chest`)
	]);
	global.dropReplacements.push([
		global.id.QK(`${type}_trapped_chest`),
		global.id.WW(`trapped_${type}_chest`)
	]);
}