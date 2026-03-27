ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/honey'), global.id.MC('honeycomb_block'));
	event.add(global.id.KJ('block_types/honey'), global.id.BB('honeycomb_bricks'));
	event.add(global.id.KJ('block_types/honey'), global.id.BB('chiseled_honeycomb_bricks'));
	event.add(global.id.KJ('block_types/honey'), global.id.BB('honeycomb_tiles'));

	event.add(global.id.KJ('slab_types/honey'), global.id.BB('honeycomb_brick_slab'));
	event.add(global.id.KJ('slab_types/honey'), global.id.BB('honeycomb_tile_slab'));

	event.add(global.id.KJ('stair_types/honey'), global.id.BB('honeycomb_brick_stairs'));
	event.add(global.id.KJ('stair_types/honey'), global.id.BB('honeycomb_tile_stairs'));
	
	event.add(global.id.KJ('wall_types/honey'), global.id.BB('honeycomb_brick_wall'));
	event.add(global.id.KJ('wall_types/honey'), global.id.BB('honeycomb_tile_wall'));
});