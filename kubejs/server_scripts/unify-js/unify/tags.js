ServerEvents.tags('item', event => {	
	for(const item of global.removedItems) {
		event.removeAllTagsFrom(item);
		event.add('kubejs:removed', item);
	}
});

ServerEvents.tags('block', event => {
	for(const block of global.removedItems) {
		event.removeAllTagsFrom(block);
		event.add('kubejs:removed', block);
		event.add('minecraft:mineable/axe', block);
		event.add('minecraft:mineable/pickaxe', block);
	}
});