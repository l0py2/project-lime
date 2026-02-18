ServerEvents.recipes(event => {
	event.shaped(
		global.id.MC('saddle'),
		[
			'LLL',
			'LIL',
			'   '
		],
		{
			L: global.tag.M('leather'),
			I: global.tag.M('ingots/iron')
		}
	);
});