ServerEvents.recipes(event => {
	event.remove({
		input: global.id.FD('straw'),
		output: global.id.SP('rope')
	});
});
