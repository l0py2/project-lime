ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/end_stone'), global.id.MC('end_stone'));
	event.add(global.id.KJ('block_types/end_stone'), global.id.MC('end_stone_bricks'));

	event.add(global.id.KJ('slab_types/end_stone'), global.id.MC('end_stone_brick_slab'));

	event.add(global.id.KJ('stair_types/end_stone'), global.id.MC('end_stone_brick_stairs'));

	event.add(global.id.KJ('wall_types/end_stone'), global.id.MC('end_stone_brick_wall'));
});