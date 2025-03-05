// priority: 3

ServerEvents.recipes(event => {
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
});
