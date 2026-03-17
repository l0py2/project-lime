//priority: 100

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
	for(const type of global.removedRecipeTypes) {
		event.remove({ type: type });
	}

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
	
	event.remove({ output: global.tag.KJ('removed') });
});