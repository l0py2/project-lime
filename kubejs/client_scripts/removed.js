ItemEvents.modifyTooltips(event => {
	event.add(global.removedItems, Text.red('Item removed'));

	for(const [original, replacement] of global.inputReplacements) {
		event.add(original, Text.green(`Input replaced with ${replacement}`));
	}

	for(const [original, replacement] of global.outputReplacements) {
		event.add(original, Text.green(`Output replaced with ${replacement}`));
	}
});
