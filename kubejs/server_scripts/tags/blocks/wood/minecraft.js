ServerEvents.tags('item', event => {
	const woodTypes = [
		'oak',
		'spruce',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
		'mangrove',
		'cherry',
		'crimson',
		'warped'
	];
	
	for(const woodType of woodTypes) {
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.MC(`${woodType}_planks`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.QK(`vertical_${woodType}_planks`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.WW(`${woodType}_boards`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.HC(`${woodType}_pillar_trim`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.HC(`${woodType}_corner_trim`));
		
		event.add(global.id.KJ(`slab_types/${woodType}`), global.id.MC(`${woodType}_slab`));
		
		event.add(global.id.KJ(`stair_types/${woodType}`), global.id.MC(`${woodType}_stairs`));
		
		event.add(global.id.KJ(`wall_types/${woodType}`), global.id.MC(`${woodType}_fence`));
		event.add(global.id.KJ(`wall_types/${woodType}`), global.id.MC(`${woodType}_fence_gate`));
	}
});