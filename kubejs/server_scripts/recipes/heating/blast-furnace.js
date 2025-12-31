ServerEvents.recipes(event => {
	const dyeColours = [
		'white',
		'light_gray',
		'gray',
		'black',
		'brown',
		'red',
		'orange',
		'yellow',
		'lime',
		'green',
		'cyan',
		'light_blue',
		'blue',
		'purple',
		'magenta',
		'pink'
	];
	
	for(const colour of dyeColours) {
		event.blasting(global.id.MC(`${colour}_glazed_terracotta`), global.id.MC(`${colour}_terracotta`));
	}
	
	event.blasting(global.id.MC('nether_brick'), global.id.MC('netherrack'));
	event.blasting(global.id.MC('charcoal'), global.tag.MC('logs_that_burn'));
	event.blasting(global.id.MC('sponge'), global.id.MC('wet_sponge'));
	event.blasting(global.id.MC('glass'), global.tag.MC('smelts_to_glass'));
	event.blasting(global.id.MC('terracotta'), global.id.MC('clay'));
	event.blasting(global.id.CR('scoria'), global.id.MC('soul_sand'));
});