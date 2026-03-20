ServerEvents.tags('item', event => {
	const woodTypes = [
		'ancient',
		'azalea',
		'blossom'
	];
	
	for(const woodType of woodTypes) {
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.QK(`${woodType}_planks`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.QK(`vertical_${woodType}_planks`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.EC(`abnww/quark/${woodType}_boards`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.EC(`hc/quark/${woodType}_pillar_trim`));
		event.add(global.id.KJ(`block_types/${woodType}`), global.id.EC(`hc/quark/${woodType}_corner_trim`));
		
		event.add(global.id.KJ(`slab_types/${woodType}`), global.id.QK(`${woodType}_planks_slab`));
		
		event.add(global.id.KJ(`stair_types/${woodType}`), global.id.QK(`${woodType}_planks_stairs`));
		
		event.add(global.id.KJ(`wall_types/${woodType}`), global.id.QK(`${woodType}_fence`));
		event.add(global.id.KJ(`wall_types/${woodType}`), global.id.QK(`${woodType}_fence_gate`));
	}
});