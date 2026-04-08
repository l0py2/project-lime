ItemEvents.tooltip(event => {
	event.add(global.hiddenItems, Text.red('Item hidden'));
	
	event.add(global.removedItems, Text.red('Item removed'));

	for(const [original, replacement] of global.inputReplacements) {
		event.add(original, Text.green(`Input replaced with ${replacement}`));
	}

	for(const [original, replacement] of global.outputReplacements) {
		event.add(original, Text.green(`Output replaced with ${replacement}`));
	}
	
	for(const [original, replacement] of global.dropReplacements) {
		event.add(original, Text.green(`Drop replaced with ${replacement}`));
	}
});
