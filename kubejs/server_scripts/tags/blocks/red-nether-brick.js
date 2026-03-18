ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/red_nether_brick'), global.id.MC('red_nether_bricks'));

	event.add(global.id.KJ('slab_types/red_nether_brick'), global.id.MC('red_nether_brick_slab'));

	event.add(global.id.KJ('stair_types/red_nether_brick'), global.id.MC('red_nether_brick_stairs'));

	event.add(global.id.KJ('wall_types/red_nether_brick'), global.id.MC('red_nether_brick_wall'));
});