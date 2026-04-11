//priority: 49

(() => {
const stoneTypes = [
	'asurine',
	'crimsite',
	'ochrum',
	'veridium',
	'limestone',
	'scorchia',
	'scoria',
	'andesite',
	'diorite',
	'granite',
	'calcite',
	'dripstone',
	'deepslate',
	'tuff'
];
	
for(const stoneType of stoneTypes) {
	global.blockConversions.types.add(`${stoneType}`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.CR(`cut_${stoneType}`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.CR(`cut_${stoneType}_bricks`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.CR(`small_${stoneType}_bricks`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.CR(`layered_${stoneType}`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.CR(`${stoneType}_pillar`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`cut_${stoneType}_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`cut_${stoneType}_brick_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`small_${stoneType}_brick_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`cut_${stoneType}_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`cut_${stoneType}_brick_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`small_${stoneType}_brick_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`cut_${stoneType}_wall`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}_wall`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`cut_${stoneType}_brick_wall`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`small_${stoneType}_brick_wall`)]);
}
})();