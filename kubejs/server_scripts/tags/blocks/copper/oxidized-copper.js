ServerEvents.tags('item', event => {
	const states = [
		'exposed',
		'weathered',
		'oxidized',
		'waxed_exposed',
		'waxed_weathered',
		'waxed_oxidized'
	];
	
	for(const state of states) {
		event.add(global.id.KJ(`block_types/${state}_copper`), global.id.MC(`${state}_copper`));
		event.add(global.id.KJ(`block_types/${state}_copper`), global.id.MC(`${state}_cut_copper`));
		event.add(global.id.KJ(`block_types/${state}_copper`), global.id.CR(`${state}_copper_shingles`));
		event.add(global.id.KJ(`block_types/${state}_copper`), global.id.CR(`${state}_copper_tiles`));
		
		event.add(global.id.KJ(`slab_types/${state}_copper`), global.id.MC(`${state}_cut_copper_slab`));
		event.add(global.id.KJ(`slab_types/${state}_copper`), global.id.CR(`${state}_copper_shingle_slab`));
		event.add(global.id.KJ(`slab_types/${state}_copper`), global.id.CR(`${state}_copper_tile_slab`));
		
		event.add(global.id.KJ(`stair_types/${state}_copper`), global.id.MC(`${state}_cut_copper_stairs`));
		event.add(global.id.KJ(`stair_types/${state}_copper`), global.id.CR(`${state}_copper_shingle_stairs`));
		event.add(global.id.KJ(`stair_types/${state}_copper`), global.id.CR(`${state}_copper_tile_stairs`));
	}
});