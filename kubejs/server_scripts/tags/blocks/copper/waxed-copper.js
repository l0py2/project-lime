ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/waxed_copper'), global.id.MC('waxed_copper_block'));
	event.add(global.id.KJ('block_types/waxed_copper'), global.id.MC('waxed_cut_copper'));
	event.add(global.id.KJ('block_types/waxed_copper'), global.id.CR('waxed_copper_shingles'));
	event.add(global.id.KJ('block_types/waxed_copper'), global.id.CR('waxed_copper_tiles'));
		
	event.add(global.id.KJ('slab_types/waxed_copper'), global.id.MC('waxed_cut_copper_slab'));
	event.add(global.id.KJ('slab_types/waxed_copper'), global.id.CR('waxed_copper_shingle_slab'));
	event.add(global.id.KJ('slab_types/waxed_copper'), global.id.CR('waxed_copper_tile_slab'));
		
	event.add(global.id.KJ('stair_types/waxed_copper'), global.id.MC('waxed_cut_copper_stairs'));
	event.add(global.id.KJ('stair_types/waxed_copper'), global.id.CR('waxed_copper_shingle_stairs'));
	event.add(global.id.KJ('stair_types/waxed_copper'), global.id.CR('waxed_copper_tile_stairs'));
});