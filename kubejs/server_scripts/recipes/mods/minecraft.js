ServerEvents.recipes(event => {
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
	
	event.blasting(global.id.MC('leather'), global.id.MC('rotten_flesh')).xp(0.1);
	
	event.remove({ id: global.id.MC('stonecutter') });
	
	event.shaped(
		global.id.MC('stonecutter'),
		[
			' A ',
			'BBB'
		],
		{
			A: global.tag.M('ingots/iron'),
			B: global.tag.M('stone')
		}
	);
	
	event.shaped(
		global.id.MC('stonecutter'),
		[
			' A ',
			'BBB'
		],
		{
			A: global.tag.M('ingots/copper'),
			B: global.tag.M('stone')
		}
	);
	
	event.remove({ output: global.id.MC('blast_furnace') });
	event.shaped(
		global.id.MC('blast_furnace'),
		[
			'AAA',
			'B B',
			'AAA'
		],
		{
			'A': global.tag.MC('stone_tool_materials'),
			'B': global.id.MC('clay_ball')
		}
	);
	
	event.remove({ output: global.id.MC('smoker') });
	event.shaped(
		global.id.MC('smoker'),
		[
			'ABA',
			'B B',
			'ABA'
		],
		{
			'A': global.tag.MC('logs'),
			'B': global.tag.MC('stone_tool_materials')
		}
	);
});