ServerEvents.recipes(event => {
	event.remove({
		type: global.id.MC('crafting_shaped'),
		output: global.tag.MC('slabs')
	});
	
	event.remove({
		type: global.id.MC('crafting_shaped'),
		output: global.tag.QK('vertical_slabs')
	});
});