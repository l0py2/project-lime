ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: global.id.BC('pizza') },
		global.id.MC('wheat'),
		global.id.CR('dough')
	);
});