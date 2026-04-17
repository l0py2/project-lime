//priority: 49

(() => {
const states = [
	'exposed',
	'weathered',
	'oxidized',
	'waxed_exposed',
	'waxed_weathered',
	'waxed_oxidized'
];
	
for(const state of states) {
	global.blockConversions.types.add(`${state}_copper`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${state}_copper`), global.id.MC(`${state}_copper`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${state}_copper`), global.id.MC(`${state}_cut_copper`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${state}_copper`), global.id.CR(`${state}_copper_shingles`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${state}_copper`), global.id.CR(`${state}_copper_tiles`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${state}_copper`), global.id.MC(`${state}_cut_copper_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${state}_copper`), global.id.CR(`${state}_copper_shingle_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${state}_copper`), global.id.CR(`${state}_copper_tile_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${state}_copper`), global.id.MC(`${state}_cut_copper_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${state}_copper`), global.id.CR(`${state}_copper_shingle_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${state}_copper`), global.id.CR(`${state}_copper_tile_stairs`)]);
}
})();