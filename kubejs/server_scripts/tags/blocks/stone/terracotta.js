ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/terracotta'), global.id.MC('terracotta'));
	event.add(global.id.KJ('block_types/terracotta'), global.id.QK('shingles'));
	event.add(global.id.KJ('slab_types/terracotta'), global.id.QK('shingles_slab'));
	event.add(global.id.KJ('stair_types/terracotta'), global.id.QK('shingles_stairs'));
	
	for(const colour of global.dyeColours) {
		event.add(global.id.KJ(`block_types/${colour}_terracotta`), global.id.MC(`${colour}_terracotta`));
		event.add(global.id.KJ(`block_types/${colour}_terracotta`), global.id.QK(`${colour}_shingles`));
		event.add(global.id.KJ(`slab_types/${colour}_terracotta`), global.id.QK(`${colour}_shingles_slab`));
		event.add(global.id.KJ(`stair_types/${colour}_terracotta`), global.id.QK(`${colour}_shingles_stairs`));
	}
});