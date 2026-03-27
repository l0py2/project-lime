ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/nether_brick'), global.id.MC('nether_bricks'));
	event.add(global.id.KJ('block_types/nether_brick'), global.id.MC('cracked_nether_bricks'));
	event.add(global.id.KJ('block_types/nether_brick'), global.id.MC('chiseled_nether_bricks'));

	event.add(global.id.KJ('slab_types/nether_brick'), global.id.MC('nether_brick_slab'));

	event.add(global.id.KJ('stair_types/nether_brick'), global.id.MC('nether_brick_stairs'));

	event.add(global.id.KJ('wall_types/nether_brick'), global.id.MC('nether_brick_wall'));
	event.add(global.id.KJ('wall_types/nether_brick'), global.id.MC('nether_brick_fence'));
	event.add(global.id.KJ('wall_types/nether_brick'), global.id.QK('nether_brick_fence_gate'));
});