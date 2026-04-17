//priority: 49

global.blockConversions.types.add('framed_glass');

global.blockConversions.tags.push([global.id.KJ('block_types/framed_glass'), global.id.QK('framed_glass')]);
global.blockConversions.tags.push([global.id.KJ('wall_types/framed_glass'), global.id.QK('framed_glass_pane')]);

for(const colour of global.dyeColours) {
	global.blockConversions.types.add(`${colour}_framed_glass`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${colour}_framed_glass`), global.id.QK(`${colour}_framed_glass`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${colour}_framed_glass`), global.id.QK(`${colour}_framed_glass_pane`)]);
}