ServerEvents.recipes(event => {
	event.remove({ id: global.id.HC('stackable_book') });
	event.shapeless(
		global.id.HC('stackable_book'),
		[global.id.MC('book')]
	);
	event.shapeless(
		global.id.MC('book'),
		[global.id.HC('stackable_book')]
	);
});