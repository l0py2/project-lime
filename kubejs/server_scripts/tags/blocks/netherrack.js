ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/netherrack'), global.id.MC('netherrack'));
	event.add(global.id.KJ('block_types/netherrack'), global.id.QK('netherrack_bricks'));

	event.add(global.id.KJ('slab_types/netherrack'), global.id.QK('netherrack_bricks_slab'));

	event.add(global.id.KJ('stair_types/netherrack'), global.id.QK('netherrack_bricks_stairs'));

	event.add(global.id.KJ('wall_types/netherrack'), global.id.QK('netherrack_bricks_wall'));
});