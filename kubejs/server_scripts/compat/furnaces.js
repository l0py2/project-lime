ServerEvents.tags('item', event => {
	event.add(global.id.M('furnaces'), global.id.MC('furnace'));
	event.add(global.id.M('furnaces'), global.id.QK('blackstone_furnace'));
	event.add(global.id.M('furnaces'), global.id.QK('deepslate_furnace'));
});

ServerEvents.tags('block', event => {
	event.add(global.id.M('furnaces'), global.id.MC('furnace'));
	event.add(global.id.M('furnaces'), global.id.QK('blackstone_furnace'));
	event.add(global.id.M('furnaces'), global.id.QK('deepslate_furnace'));
});
