ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/dripstone'), global.id.MC('dripstone_block'));
	event.add(global.id.KJ('block_types/dripstone'), global.id.QK('polished_dripstone'));
	event.add(global.id.KJ('block_types/dripstone'), global.id.QK('dripstone_bricks'));
	event.add(global.id.KJ('block_types/dripstone'), global.id.QK('chiseled_dripstone_bricks'));
	event.add(global.id.KJ('block_types/dripstone'), global.id.QK('dripstone_pillar'));
	event.add(global.id.KJ('block_types/dripstone'), global.id.HC('dripstone_pillar_trim'));
	event.add(global.id.KJ('block_types/dripstone'), global.id.HC('dripstone_corner_trim'));
	
	event.add(global.id.KJ('slab_types/dripstone'), global.id.QK('dripstone_bricks_slab'));
	event.add(global.id.KJ('slab_types/dripstone'), global.id.QK('dripstone_block_slab'));
	event.add(global.id.KJ('slab_types/dripstone'), global.id.QK('polished_dripstone_slab'));
	
	event.add(global.id.KJ('stair_types/dripstone'), global.id.QK('dripstone_bricks_stairs'));
	event.add(global.id.KJ('stair_types/dripstone'), global.id.QK('dripstone_block_stairs'));
	event.add(global.id.KJ('stair_types/dripstone'), global.id.QK('polished_dripstone_stairs'));
	
	event.add(global.id.KJ('wall_types/dripstone'), global.id.QK('dripstone_bricks_wall'));
	event.add(global.id.KJ('wall_types/dripstone'), global.id.QK('dripstone_block_wall'));
});