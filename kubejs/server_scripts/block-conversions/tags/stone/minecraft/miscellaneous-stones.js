ServerEvents.tags('item', event => {
	const stoneTypes = [
		'andesite',
		'diorite',
		'granite'
	];
	
	for(const stoneType of stoneTypes) {
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.MC(`${stoneType}`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.MC(`polished_${stoneType}`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.QK(`${stoneType}_bricks`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.QK(`chiseled_${stoneType}_bricks`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.QK(`${stoneType}_pillar`));

		event.add(global.id.KJ(`slab_types/${stoneType}`), global.id.MC(`${stoneType}_slab`));
		event.add(global.id.KJ(`slab_types/${stoneType}`), global.id.QK(`${stoneType}_bricks_slab`));
		event.add(global.id.KJ(`slab_types/${stoneType}`), global.id.MC(`polished_${stoneType}_slab`));

		event.add(global.id.KJ(`stair_types/${stoneType}`), global.id.MC(`${stoneType}_stairs`));
		event.add(global.id.KJ(`stair_types/${stoneType}`), global.id.MC(`polished_${stoneType}_stairs`));
		event.add(global.id.KJ(`stair_types/${stoneType}`), global.id.QK(`${stoneType}_bricks_stairs`));

		event.add(global.id.KJ(`wall_types/${stoneType}`), global.id.MC(`${stoneType}_wall`));
		event.add(global.id.KJ(`wall_types/${stoneType}`), global.id.QK(`${stoneType}_bricks_wall`));
	}
});