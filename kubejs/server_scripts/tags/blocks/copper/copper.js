ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/copper'), global.id.MC('copper_block'));
	event.add(global.id.KJ('block_types/copper'), global.id.MC('cut_copper'));
	event.add(global.id.KJ('block_types/copper'), global.id.CR('copper_shingles'));
	event.add(global.id.KJ('block_types/copper'), global.id.CR('copper_tiles'));
		
	event.add(global.id.KJ('slab_types/copper'), global.id.MC('cut_copper_slab'));
	event.add(global.id.KJ('slab_types/copper'), global.id.CR('copper_shingle_slab'));
	event.add(global.id.KJ('slab_types/copper'), global.id.CR('copper_tile_slab'));
		
	event.add(global.id.KJ('stair_types/copper'), global.id.MC('cut_copper_stairs'));
	event.add(global.id.KJ('stair_types/copper'), global.id.CR('copper_shingle_stairs'));
	event.add(global.id.KJ('stair_types/copper'), global.id.CR('copper_tile_stairs'));
});