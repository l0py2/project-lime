// priority: 1

ServerEvents.tags('item', event => {
	global.removedItems.forEach(item => {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	});
});

ServerEvents.recipes(event => {
	function replaceInput(original, replacement) {
		event.replaceInput(
			{ input: original },
			original,
			replacement
		);
	}

	function replaceOutput(original, replacement) {
		event.replaceOutput(
			{ output: original },
			original,
			replacement
		);
	}

	function replaceAll(original, replacement) {
		replaceInput(original, replacement);
		replaceOutput(original, replacement);
	}

	replaceAll(global.id.FD('rope'), global.tag.M('rope'));

	global.removedItems.forEach(item => {
		event.remove({
			output: item
		});
	});
});
