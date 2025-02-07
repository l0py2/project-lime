ServerEvents.recipes(event => {
	event.shaped(
		global.id.MC('name_tag'),
		[
			'A  ',
			'B  ',
			'   '
		],
		{
			A: global.tag.M('string'),
			B: global.id.MC('paper')
		}
	);

	event.shaped(
		global.id.MC('saddle'),
		[
			'  A',
			'AAA',
			'ABA'
		],
		{
			A: global.tag.M('leather'),
			B: global.tag.M('ingots/iron')
		}
	);
});
