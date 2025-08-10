ServerEvents.recipes(event => {
	event.shaped(

		//Saddle Recipe
	
		Item.of('minecraft:saddle'),
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
	
	event.shaped(
	
		//Iron Horse Armor Recipe
		
		Item.of('minecraft:iron_horse_armor'),
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
	
		//Gold Horse Armor Recipe
		
		Item.of('minecraft:golden_horse_armor'),
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
	
		//Diamond Horse Armor Recipe
		
		Item.of('minecraft:diamond_horse_armor'),
		[
			'  D',
			'DDD',
			'D D'
		],
		{
			D: global.tag.M('gems/diamond')
		}
	);
});