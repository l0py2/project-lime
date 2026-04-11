(() => {
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
	global.blockConversions.types.add(`${woodType}`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${woodType}`), global.id.MC(`${woodType}_planks`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${woodType}`), global.id.QK(`vertical_${woodType}_planks`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${woodType}`), global.id.WW(`${woodType}_boards`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${woodType}`), global.id.HC(`${woodType}_pillar_trim`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${woodType}`), global.id.HC(`${woodType}_corner_trim`)]);
	global.blockConversions.tags.push([global.id.KJ(`slab_types/${woodType}`), global.id.MC(`${woodType}_slab`)]);
	global.blockConversions.tags.push([global.id.KJ(`stair_types/${woodType}`), global.id.MC(`${woodType}_stairs`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${woodType}`), global.id.MC(`${woodType}_fence`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${woodType}`), global.id.MC(`${woodType}_fence_gate`)]);
}
})();