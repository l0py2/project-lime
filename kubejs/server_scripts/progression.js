ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: global.id.MC('blast_furnace') },
		global.tag.M('ingots/iron'),
		global.tag.M('ingots/copper')
	);
});
