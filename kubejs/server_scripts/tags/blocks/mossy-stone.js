ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/mossy_stone'), global.id.MC('mossy_cobblestone'));
	event.add(global.id.KJ('block_types/mossy_stone'), global.id.MC('mossy_stone_bricks'));
	event.add(global.id.KJ('block_types/mossy_stone'), global.id.QK('mossy_cobblestone_bricks'));

	event.add(global.id.KJ('slab_types/mossy_stone'), global.id.MC('mossy_cobblestone_slab'));
	event.add(global.id.KJ('slab_types/mossy_stone'), global.id.QK('mossy_cobblestone_vertical_slab'));
	event.add(global.id.KJ('slab_types/mossy_stone'), global.id.MC('mossy_stone_brick_slab'));
	event.add(global.id.KJ('slab_types/mossy_stone'), global.id.QK('mossy_stone_brick_vertical_slab'));
	event.add(global.id.KJ('slab_types/mossy_stone'), global.id.QK('mossy_cobblestone_bricks_slab'));
	event.add(global.id.KJ('slab_types/mossy_stone'), global.id.QK('mossy_cobblestone_bricks_vertical_slab'));

	event.add(global.id.KJ('stair_types/mossy_stone'), global.id.MC('mossy_cobblestone_stairs'));
	event.add(global.id.KJ('stair_types/mossy_stone'), global.id.MC('mossy_stone_brick_stairs'));
	event.add(global.id.KJ('stair_types/mossy_stone'), global.id.QK('mossy_cobblestone_bricks_stairs'));

	event.add(global.id.KJ('wall_types/mossy_stone'), global.id.MC('mossy_cobblestone_wall'));
	event.add(global.id.KJ('wall_types/mossy_stone'), global.id.MC('mossy_stone_brick_wall'));
	event.add(global.id.KJ('wall_types/mossy_stone'), global.id.QK('mossy_cobblestone_bricks_wall'));
});