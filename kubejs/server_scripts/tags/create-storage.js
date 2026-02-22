ServerEvents.tags('block', event => {
	// Handcrafted
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('side_tables'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('desks'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('nightstands'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('counters'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('cupboards'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('drawers'));
	event.add(global.id.CR('simple_mounted_storage'), global.tag.HC('shelves'));
	
	// Farmer's Delight
	[
		global.id.FD('oak_cabinet'),
		global.id.FD('spruce_cabinet'),
		global.id.FD('birch_cabinet'),
		global.id.FD('jungle_cabinet'),
		global.id.FD('acacia_cabinet'),
		global.id.FD('dark_oak_cabinet'),
		global.id.FD('mangrove_cabinet'),
		global.id.FD('cherry_cabinet'),
		global.id.FD('bamboo_cabinet'),
		global.id.FD('warped_cabinet'),
		global.id.FD('crimson_cabinet'),
		global.id.DF('quartz_cabinet'),
		global.id.DF('basalt_cabinet')
	].forEach(block => {
		event.add(global.id.CR('simple_mounted_storage'), block);
	});
});