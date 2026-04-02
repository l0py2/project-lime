ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/deepslate'), global.id.MC('deepslate'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.MC('cobbled_deepslate'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.MC('chiseled_deepslate'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.MC('polished_deepslate'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.MC('deepslate_bricks'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.MC('cracked_deepslate_bricks'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.MC('deepslate_tiles'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.HC('deepslate_pillar_trim'));
	event.add(global.id.KJ('block_types/deepslate'), global.id.HC('deepslate_corner_trim'));

	event.add(global.id.KJ('slab_types/deepslate'), global.id.MC('cobbled_deepslate_slab'));
	event.add(global.id.KJ('slab_types/deepslate'), global.id.MC('polished_deepslate_slab'));
	event.add(global.id.KJ('slab_types/deepslate'), global.id.MC('deepslate_brick_slab'));
	event.add(global.id.KJ('slab_types/deepslate'), global.id.MC('deepslate_tile_slab'));

	event.add(global.id.KJ('stair_types/deepslate'), global.id.MC('cobbled_deepslate_stairs'));
	event.add(global.id.KJ('stair_types/deepslate'), global.id.MC('polished_deepslate_stairs'));
	event.add(global.id.KJ('stair_types/deepslate'), global.id.MC('deepslate_brick_stairs'));
	event.add(global.id.KJ('stair_types/deepslate'), global.id.MC('deepslate_tile_stairs'));

	event.add(global.id.KJ('wall_types/deepslate'), global.id.MC('cobbled_deepslate_wall'));
	event.add(global.id.KJ('wall_types/deepslate'), global.id.MC('polished_deepslate_wall'));
	event.add(global.id.KJ('wall_types/deepslate'), global.id.MC('deepslate_brick_wall'));
	event.add(global.id.KJ('wall_types/deepslate'), global.id.MC('deepslate_tile_wall'));
});