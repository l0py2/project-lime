//priority: 49

(() => {
const stoneTypes = [
	'andesite',
	'diorite',
	'granite'
];
	
for(const stoneType of stoneTypes) {
	global.blockConversions.types.add(`${stoneType}`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.MC(`${stoneType}`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.MC(`polished_${stoneType}`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.QK(`${stoneType}_bricks`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.QK(`chiseled_${stoneType}_bricks`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.QK(`${stoneType}_pillar`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${stoneType}`), global.id.MC(`${stoneType}_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${stoneType}`), global.id.QK(`${stoneType}_bricks_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${stoneType}`), global.id.MC(`polished_${stoneType}_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${stoneType}`), global.id.MC(`${stoneType}_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${stoneType}`), global.id.MC(`polished_${stoneType}_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${stoneType}`), global.id.QK(`${stoneType}_bricks_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${stoneType}`), global.id.MC(`${stoneType}_wall`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${stoneType}`), global.id.QK(`${stoneType}_bricks_wall`)]);
}
})();