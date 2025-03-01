ItemEvents.modifyTooltips(event => {
	event.add(global.removedItems, Text.red('Item removed'));

	for(const [original, replacement] of global.replacements) {
		event.add(original, Text.green(`Replaced with ${replacement}`));
	}
});
