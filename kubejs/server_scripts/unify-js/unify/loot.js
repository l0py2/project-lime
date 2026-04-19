LootJS.modifiers(event => {
	if(global.dropReplacements.length == 0 && global.removedItems.length == 0) {
		return;
	}
	
	const lootTables = event.addTableModifier(/.*/);

	for(const [original, replacement] of global.dropReplacements) {
		lootTables.replaceLoot(original, replacement, true);
	}

	for(const item of global.removedItems) {
		lootTables.removeLoot(item);
	}
});