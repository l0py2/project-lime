//priority: 9

ServerEvents.recipes(event => {
	event.remove({ type: global.id.MC('stonecutting') });
});