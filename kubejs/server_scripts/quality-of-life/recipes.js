ServerEvents.recipes(event => {
	event.shaped(
		global.id.MC('saddle'),
		[
			'   ',
			'LLL',
			'LIL'
		],
		{
			L: global.tag.M('leather'),
			I: global.tag.M('ingots/iron')
		}
	);

	event.remove({ id: global.id.MC('leather_horse_armor') });
	event.shaped(
		global.id.MC('leather_horse_armor'),
		[
			'  I',
			'III',
			'I I'
		],
		{
			I: global.tag.M('leather')
		}
	);
	
	event.shaped(
		global.id.MC('iron_horse_armor'),
		[
			'  I',
			'III',
			'I I'
		],
		{
			I: global.tag.M('ingots/iron')
		}
	);
	
	event.shaped(
		global.id.MC('golden_horse_armor'),
		[
			'  G',
			'GGG',
			'G G'
		],
		{
			G: global.tag.M('ingots/gold')
		}
	);
	
	event.shaped(
		global.id.MC('diamond_horse_armor'),
		[
			'  D',
			'DDD',
			'D D'
		],
		{
			D: global.tag.M('gems/diamond')
		}
	);
	
	event.blasting(global.id.MC('leather'), global.id.MC('rotten_flesh'));
});