ServerEvents.tags('block', event => {
	event.add(global.id.CR('chest_mounted_storage'), global.tag.M('chests/wooden'));
	
	// Handcrafted
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('side_tables'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('desks'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('nightstands'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('counters'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('cupboards'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('drawers'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('shelves'));
	
	// Farmer's Delight
	for(const wood of global.materials.wood.minecraft) {
		event.add(global.id.CR('simple_mounted_storage'), global.id.FD(`${wood}_cabinet`));
	}
	
	event.add(global.id.CR('simple_mounted_storage'), global.id.DF('quartz_cabinet'));
	event.add(global.id.CR('simple_mounted_storage'), global.id.DF('basalt_cabinet'));
});