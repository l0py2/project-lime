//priority: 49

global.blockConversions.types.add('terracotta');

global.blockConversions.tags.push([global.id.KJ('block_types/terracotta'), global.id.MC('terracotta')]);
global.blockConversions.tags.push([global.id.KJ('block_types/terracotta'), global.id.QK('shingles')]);
global.blockConversions.tags.push([global.id.KJ('slab_types/terracotta'), global.id.QK('shingles_slab')]);
global.blockConversions.tags.push([global.id.KJ('stair_types/terracotta'), global.id.QK('shingles_stairs')]);
	
for(const colour of global.dyeColours) {
	global.blockConversions.types.add(`${colour}_terracotta`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${colour}_terracotta`), global.id.MC(`${colour}_terracotta`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${colour}_terracotta`), global.id.QK(`${colour}_shingles`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${colour}_terracotta`), global.id.QK(`${colour}_shingles_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${colour}_terracotta`), global.id.QK(`${colour}_shingles_stairs`)]);
}