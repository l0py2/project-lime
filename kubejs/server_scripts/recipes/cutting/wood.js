ServerEvents.recipes(event => {
	event.remove({
		type: global.id.SM('woodcutting'),
		input: global.tag.MC('planks'),
		output: global.tag.MC('logs')
	});
	
	event.remove({
		type: global.id.SM('woodcutting'),
		input: global.tag.MC('planks'),
		output: global.tag.QK('hollow_logs')
	});
});