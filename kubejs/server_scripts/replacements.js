// priority: 3

ServerEvents.recipes(event => {
	for(const [original, replacement] of global.replacements) {
		event.replaceInput(
			{ input: original },
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

	event.remove({ id: global.id.FD('bread_from_smoking') });
});
