ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/midori'), global.id.QK('midori_block'));
	event.add(global.id.KJ('block_types/midori'), global.id.QK('midori_pillar'));

	event.add(global.id.KJ('slab_types/midori'), global.id.QK('midori_block_slab'));
	
	event.add(global.id.KJ('stair_types/midori'), global.id.QK('midori_block_stairs'));
});