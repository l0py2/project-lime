//priority: 49

global.blockConversions.types.add('glass');

global.blockConversions.tags.push([global.id.KJ('block_types/glass'), global.id.MC('glass')]);
global.blockConversions.tags.push([global.id.KJ('block_types/glass'), global.id.CR('tiled_glass')]);
global.blockConversions.tags.push([global.id.KJ('block_types/glass'), global.id.CR('framed_glass')]);
global.blockConversions.tags.push([global.id.KJ('block_types/glass'), global.id.CR('horizontal_framed_glass')]);
global.blockConversions.tags.push([global.id.KJ('block_types/glass'), global.id.CR('vertical_framed_glass')]);
global.blockConversions.tags.push([global.id.KJ('wall_types/glass'), global.id.MC('glass_pane')]);
global.blockConversions.tags.push([global.id.KJ('wall_types/glass'), global.id.CR('tiled_glass_pane')]);
global.blockConversions.tags.push([global.id.KJ('wall_types/glass'), global.id.CR('framed_glass_pane')]);
global.blockConversions.tags.push([global.id.KJ('wall_types/glass'), global.id.CR('horizontal_framed_glass_pane')]);
global.blockConversions.tags.push([global.id.KJ('wall_types/glass'), global.id.CR('vertical_framed_glass_pane')]);
	
for(const colour of global.dyeColours) {
	global.blockConversions.types.add(`${colour}_stained_glass`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${colour}_stained_glass`), global.id.MC(`${colour}_stained_glass`)]);
	global.blockConversions.tags.push([global.id.KJ(`wall_types/${colour}_stained_glass`), global.id.MC(`${colour}_stained_glass_pane`)]);
}