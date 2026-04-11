ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/sand'), global.id.MC('sand'));
	event.add(global.id.KJ('block_types/sand'), global.id.MC('sandstone'));
	event.add(global.id.KJ('block_types/sand'), global.id.MC('chiseled_sandstone'));
	event.add(global.id.KJ('block_types/sand'), global.id.MC('smooth_sandstone'));
	event.add(global.id.KJ('block_types/sand'), global.id.MC('cut_sandstone'));
	event.add(global.id.KJ('block_types/sand'), global.id.QK('sandstone_bricks'));
	event.add(global.id.KJ('block_types/sand'), global.id.HC('sandstone_pillar_trim'));
	event.add(global.id.KJ('block_types/sand'), global.id.HC('sandstone_corner_trim'));

	event.add(global.id.KJ('slab_types/sand'), global.id.MC('sandstone_slab'));
	event.add(global.id.KJ('slab_types/sand'), global.id.MC('smooth_sandstone_slab'));
	event.add(global.id.KJ('slab_types/sand'), global.id.MC('cut_sandstone_slab'));
	event.add(global.id.KJ('slab_types/sand'), global.id.QK('sandstone_bricks_slab'));

	event.add(global.id.KJ('stair_types/sand'), global.id.MC('sandstone_stairs'));
	event.add(global.id.KJ('stair_types/sand'), global.id.MC('smooth_sandstone_stairs'));
	event.add(global.id.KJ('stair_types/sand'), global.id.QK('sandstone_bricks_stairs'));

	event.add(global.id.KJ('wall_types/sand'), global.id.MC('sandstone_wall'));
	event.add(global.id.KJ('wall_types/sand'), global.id.QK('sandstone_bricks_wall'));
});