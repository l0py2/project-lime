ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/quartz'), global.id.MC('quartz_block'));
	event.add(global.id.KJ('block_types/quartz'), global.id.MC('chiseled_quartz_block'));
	event.add(global.id.KJ('block_types/quartz'), global.id.MC('quartz_bricks'));
	event.add(global.id.KJ('block_types/quartz'), global.id.MC('quartz_pillar'));
	event.add(global.id.KJ('block_types/quartz'), global.id.MC('smooth_quartz'));
	event.add(global.id.KJ('block_types/quartz'), global.id.HC('quartz_pillar_trim'));
	event.add(global.id.KJ('block_types/quartz'), global.id.HC('quartz_corner_trim'));

	event.add(global.id.KJ('slab_types/quartz'), global.id.MC('quartz_slab'));
	event.add(global.id.KJ('slab_types/quartz'), global.id.MC('smooth_quartz_slab'));

	event.add(global.id.KJ('stair_types/quartz'), global.id.MC('quartz_stairs'));
	event.add(global.id.KJ('stair_types/quartz'), global.id.MC('smooth_quartz_stairs'));
});