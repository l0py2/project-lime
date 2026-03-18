ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/brick'), global.id.MC('bricks'));
	event.add(global.id.KJ('block_types/brick'), global.id.HC('bricks_pillar_trim'));
	event.add(global.id.KJ('block_types/brick'), global.id.HC('bricks_corner_trim'));

	event.add(global.id.KJ('slab_types/brick'), global.id.MC('brick_slab'));

	event.add(global.id.KJ('stair_types/brick'), global.id.MC('brick_stairs'));

	event.add(global.id.KJ('wall_types/brick'), global.id.MC('brick_wall'));
});