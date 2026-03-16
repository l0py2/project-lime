ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/crimsite'), global.id.CR('crimsite'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.CR('cut_crimsite'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.CR('polished_cut_crimsite'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.CR('cut_crimsite_bricks'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.CR('small_crimsite_bricks'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.CR('layered_crimsite'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.CR('crimsite_pillar'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.SZ('hc/create/crimsite_pillar_trim'));
	event.add(global.id.KJ('block_types/crimsite'), global.id.SZ('hc/create/crimsite_corner_trim'));
	
	event.add(global.id.KJ('slab_types/crimsite'), global.id.CR('cut_crimsite_slab'));
	event.add(global.id.KJ('slab_types/crimsite'), global.id.SC('create/cut_crimsite_vertical_slab'));
	event.add(global.id.KJ('slab_types/crimsite'), global.id.CR('polished_cut_crimsite_slab'));
	event.add(global.id.KJ('slab_types/crimsite'), global.id.SC('create/polished_cut_crimsite_vertical_slab'));
	event.add(global.id.KJ('slab_types/crimsite'), global.id.CR('cut_crimsite_brick_slab'));
	event.add(global.id.KJ('slab_types/crimsite'), global.id.SC('create/cut_crimsite_brick_vertical_slab'));
	event.add(global.id.KJ('slab_types/crimsite'), global.id.CR('small_crimsite_brick_slab'));
	event.add(global.id.KJ('slab_types/crimsite'), global.id.SC('create/small_crimsite_brick_vertical_slab'));
	
	event.add(global.id.KJ('stair_types/crimsite'), global.id.CR('cut_crimsite_stairs'));
	event.add(global.id.KJ('stair_types/crimsite'), global.id.CR('polished_cut_crimsite_stairs'));
	event.add(global.id.KJ('stair_types/crimsite'), global.id.CR('cut_crimsite_brick_stairs'));
	event.add(global.id.KJ('stair_types/crimsite'), global.id.CR('small_crimsite_brick_stairs'));
	
	event.add(global.id.KJ('wall_types/crimsite'), global.id.CR('cut_crimsite_wall'));
	event.add(global.id.KJ('wall_types/crimsite'), global.id.CR('polished_cut_crimsite_wall'));
	event.add(global.id.KJ('wall_types/crimsite'), global.id.CR('cut_crimsite_brick_wall'));
	event.add(global.id.KJ('wall_types/crimsite'), global.id.CR('small_crimsite_brick_wall'));
});