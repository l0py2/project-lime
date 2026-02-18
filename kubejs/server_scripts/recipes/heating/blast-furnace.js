ServerEvents.recipes(event => {
	for(const colour of global.dyeColours) {
		event.blasting(global.id.MC(`${colour}_glazed_terracotta`), global.id.MC(`${colour}_terracotta`));
	}
	
	event.blasting(global.id.MC('nether_brick'), global.id.MC('netherrack'));
	event.blasting(global.id.MC('charcoal'), global.tag.MC('logs_that_burn'));
	event.blasting(global.id.MC('sponge'), global.id.MC('wet_sponge'));
	event.blasting(global.id.MC('glass'), global.tag.MC('smelts_to_glass'));
	event.blasting(global.id.MC('terracotta'), global.id.MC('clay'));
	event.blasting(global.id.CR('scoria'), global.id.MC('soul_sand'));
	event.blasting(global.id.MC('leather'), global.id.MC('rotten_flesh'));
});