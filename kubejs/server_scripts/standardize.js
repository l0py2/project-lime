LootJS.modifiers(event => {
	if(global.dropReplacements.length == 0 && global.removedItems.length == 0) {
		return;
	}
	
	const lootTables = event.addLootTableModifier(/.*/);

	for(const [original, replacement] of global.dropReplacements) {
		lootTables.replaceLoot(original, replacement, true);
	}

	for(const item of global.removedItems) {
		lootTables.removeLoot(item);
	}
});

ServerEvents.tags('item', event => {
	for(const item of global.removedItems) {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	}
});

ServerEvents.tags('block', event => {
	for(const item of global.removedItems) {
		event.add(global.id.KJ('removed'), item);
	}
});

ServerEvents.tags('fluid', event => {
	for(const item of global.removedItems) {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	}
});

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