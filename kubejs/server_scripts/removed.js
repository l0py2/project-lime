// priority: 1

ServerEvents.tags('item', event => {
	for(const item of global.removedItems) {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	}
});

ServerEvents.recipes(event => {
	for(const item of global.removedItems) {
		event.remove({
			output: item
		});
	}

	for(const [original, replacement] of global.replacements) {
		event.replaceInput(
			{ input: original },
			original,
			replacement
		);
	}
});
