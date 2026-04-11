ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/bamboo'), global.id.MC('bamboo_planks'));
	event.add(global.id.KJ('block_types/bamboo'), global.id.QK('vertical_bamboo_planks'));
	event.add(global.id.KJ('block_types/bamboo'), global.id.HC('bamboo_pillar_trim'));
	event.add(global.id.KJ('block_types/bamboo'), global.id.HC('bamboo_corner_trim'));
	event.add(global.id.KJ('block_types/bamboo'), global.id.MC('bamboo_mosaic'));
		
	event.add(global.id.KJ('slab_types/bamboo'), global.id.MC('bamboo_slab'));
	event.add(global.id.KJ('slab_types/bamboo'), global.id.MC('bamboo_mosaic_slab'));
		
	event.add(global.id.KJ('stair_types/bamboo'), global.id.MC('bamboo_stairs'));
	event.add(global.id.KJ('stair_types/bamboo'), global.id.MC('bamboo_mosaic_stairs'));
		
	event.add(global.id.KJ('wall_types/bamboo'), global.id.MC('bamboo_fence'));
	event.add(global.id.KJ('wall_types/bamboo'), global.id.MC('bamboo_fence_gate'))
});