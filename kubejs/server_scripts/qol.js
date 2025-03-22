ServerEvents.recipes(event => {
	event.shaped(
		global.id.MC('saddle'),
		[
			'  A',
			'AAA',
			'ABA'
		],
		{
			A: global.id.MC('leather'),
			B: global.tag.M('ingots/iron')
		}
	);
});
