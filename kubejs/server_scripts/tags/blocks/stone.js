ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/stone'), global.id.MC('cobblestone'));
	event.add(global.id.KJ('block_types/stone'), global.id.MC('stone'));
	event.add(global.id.KJ('block_types/stone'), global.id.MC('smooth_stone'));
	event.add(global.id.KJ('block_types/stone'), global.id.MC('stone_bricks'));
	event.add(global.id.KJ('block_types/stone'), global.id.MC('cracked_stone_bricks'));
	event.add(global.id.KJ('block_types/stone'), global.id.QK('cobblestone_bricks'));
	event.add(global.id.KJ('block_types/stone'), global.id.HC('stone_pillar_trim'));
	event.add(global.id.KJ('block_types/stone'), global.id.HC('stone_corner_trim'));
	event.add(global.id.KJ('block_types/stone'), global.id.MC('chiseled_stone_bricks'));

	event.add(global.id.KJ('slab_types/stone'), global.id.MC('cobblestone_slab'));
	event.add(global.id.KJ('slab_types/stone'), global.id.MC('stone_slab'));
	event.add(global.id.KJ('slab_types/stone'), global.id.MC('smooth_stone_slab'));
	event.add(global.id.KJ('slab_types/stone'), global.id.MC('stone_brick_slab'));
	event.add(global.id.KJ('slab_types/stone'), global.id.QK('cobblestone_bricks_slab'));

	event.add(global.id.KJ('stair_types/stone'), global.id.MC('cobblestone_stairs'));
	event.add(global.id.KJ('stair_types/stone'), global.id.MC('stone_stairs'));
	event.add(global.id.KJ('stair_types/stone'), global.id.MC('stone_brick_stairs'));
	event.add(global.id.KJ('stair_types/stone'), global.id.QK('cobblestone_bricks_stairs'));

	event.add(global.id.KJ('wall_types/stone'), global.id.MC('cobblestone_wall'));
	event.add(global.id.KJ('wall_types/stone'), global.id.MC('stone_brick_wall'));
	event.add(global.id.KJ('wall_types/stone'), global.id.QK('cobblestone_bricks_wall'));
});