ServerEvents.recipes(event => {
	event.shaped(
		Item.of(global.id.IE('blueprint'), { blueprint: 'electrode' }),
		[
			' A ',
			'BBB',
			'CCC'
		],
		{
			A: global.tag.M('ingots/hop_graphite'),
			B: global.tag.M('dyes/blue'),
			C: global.id.MC('paper')
		}
	);

	event.shaped(
		Item.of(global.id.IE('blueprint'), { blueprint: 'specialBullet' }),
		[
			' A ',
			'BBB',
			'CCC'
		],
		{
			A: global.id.IE('casull'),
			B: global.tag.M('dyes/blue'),
			C: global.id.MC('paper')
		}
	);
});
