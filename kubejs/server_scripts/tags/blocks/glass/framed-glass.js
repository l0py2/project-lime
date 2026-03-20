ServerEvents.tags('item', event => {
	event.add(global.id.KJ('block_types/framed_glass'), global.id.QK('framed_glass'));
	event.add(global.id.KJ('wall_types/framed_glass'), global.id.QK('framed_glass_pane'));
	
	for(const colour of global.dyeColours) {
		event.add(global.id.KJ(`block_types/${colour}_framed_glass`), global.id.QK(`${colour}_framed_glass`));
		event.add(global.id.KJ(`wall_types/${colour}_framed_glass`), global.id.QK(`${colour}_framed_glass_pane`));
	}
});