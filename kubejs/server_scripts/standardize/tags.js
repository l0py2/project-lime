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