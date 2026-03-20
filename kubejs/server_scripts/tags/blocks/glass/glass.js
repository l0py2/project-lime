ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/glass'), global.id.MC('glass'));
	event.add(global.id.KJ('block_types/glass'), global.id.CR('tiled_glass'));
	event.add(global.id.KJ('block_types/glass'), global.id.CR('framed_glass'));
	event.add(global.id.KJ('block_types/glass'), global.id.CR('horizontal_framed_glass'));
	event.add(global.id.KJ('block_types/glass'), global.id.CR('vertical_framed_glass'));

	event.add(global.id.KJ('wall_types/glass'), global.id.MC('glass_pane'));
	event.add(global.id.KJ('wall_types/glass'), global.id.CR('tiled_glass_pane'));
	event.add(global.id.KJ('wall_types/glass'), global.id.CR('framed_glass_pane'));
	event.add(global.id.KJ('wall_types/glass'), global.id.CR('horizontal_framed_glass_pane'));
	event.add(global.id.KJ('wall_types/glass'), global.id.CR('vertical_framed_glass_pane'));
	
	for(const colour of global.dyeColours) {
		event.add(global.id.KJ(`block_types/${colour}_stained_glass`), global.id.MC(`${colour}_stained_glass`));
		event.add(global.id.KJ(`wall_types/${colour}_stained_glass`), global.id.MC(`${colour}_stained_glass_pane`));
	}
});