ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: global.id.CR('brass_casing') },
		global.tag.M('stripped_wood'),
		global.tag.M('treated_wood')
	);

	event.replaceInput(
		{ output: global.id.CR('brass_casing') },
		global.tag.M('stripped_logs'),
		global.tag.M('treated_wood')
	);
});
