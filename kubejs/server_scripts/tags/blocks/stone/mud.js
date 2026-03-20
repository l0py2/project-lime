ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/mud'), global.id.MC('packed_mud'));
	event.add(global.id.KJ('block_types/mud'), global.id.MC('mud_bricks'));
	event.add(global.id.KJ('block_types/mud'), global.id.QK('carved_mud_bricks'));
	event.add(global.id.KJ('block_types/mud'), global.id.QK('mud_pillar'));
	event.add(global.id.KJ('block_types/mud'), global.id.QK('mud_brick_lattice'));

	event.add(global.id.KJ('slab_types/mud'), global.id.MC('mud_brick_slab'));
	
	event.add(global.id.KJ('stair_types/mud'), global.id.MC('mud_brick_stairs'));
	
	event.add(global.id.KJ('wall_types/mud'), global.id.MC('mud_brick_wall'));
});