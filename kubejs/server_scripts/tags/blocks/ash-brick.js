ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/ash_brick'), global.id.SP('ash_bricks'));

	event.add(global.id.KJ('slab_types/ash_brick'), global.id.SP('ash_bricks_slab'));

	event.add(global.id.KJ('stair_types/ash_brick'), global.id.SP('ash_bricks_stairs'));

	event.add(global.id.KJ('wall_types/ash_brick'), global.id.SP('ash_bricks_wall'));
});