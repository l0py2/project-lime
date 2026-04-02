ServerEvents.recipes(event => {
	for(const filter of global.removedRecipes) {
		event.remove(filter);
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
	
	event.replaceInput(
		{ input: global.tag.KJ('removed') },
		global.tag.KJ('removed'),
		global.id.MC('air')
	);
	
	event.replaceOutput(
		{ output: global.tag.KJ('removed') },
		global.tag.KJ('removed'),
		global.id.MC('air')
	);
});