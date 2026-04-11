ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/permafrost'), global.id.QK('permafrost'));
	event.add(global.id.KJ('block_types/permafrost'), global.id.QK('permafrost_bricks'));
	
	event.add(global.id.KJ('slab_types/permafrost'), global.id.QK('permafrost_bricks_slab'));
	event.add(global.id.KJ('slab_types/permafrost'), global.id.QK('permafrost_slab'));
	
	event.add(global.id.KJ('stair_types/permafrost'), global.id.QK('permafrost_bricks_stairs'));
	event.add(global.id.KJ('stair_types/permafrost'), global.id.QK('permafrost_stairs'));
	
	event.add(global.id.KJ('wall_types/permafrost'), global.id.QK('permafrost_bricks_wall'));
	event.add(global.id.KJ('wall_types/permafrost'), global.id.QK('permafrost_wall'));
});