// priority: 1

ServerEvents.tags('item', event => {
	for(const item of global.removedItems) {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	}
});

ServerEvents.recipes(event => {
	for(const recipe of global.removedRecipes) {
		event.remove({ id: recipe });
	}

	for(const [original, replacement] of global.inputReplacements) {
		event.replaceInput(
			{ input: original },
			original,
			replacement
		);
	}

	for(const [original, replacement] of global.outputReplacements) {
		event.replaceOutput(
			{ output: original },
			original,
			replacement
		);
	}

	for(const [original, replacement] of global.tagReplacements) {
		event.replaceInput(
			{ input: original },
			original,
			replacement
		);
	}

	event.replaceInput(
		{ output: global.id.CD('tortilla') },
		global.tag.M('doughs'),
		global.tag.M('doughs/corn')
	);

	event.replaceInput(
		{ output: global.id.CD('empanada') },
		global.tag.M('doughs'),
		global.tag.M('doughs/corn')
	);

	for(const item of global.removedItems) {
		event.remove({
			output: item
		});
	}
});
