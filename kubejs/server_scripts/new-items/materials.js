ServerEvents.tags('item', event => {
	event.add(global.id.M('plates'), global.id.KJ('compressed_iron_plate'));
	event.add(global.id.M('plates/compressed_iron'), global.id.KJ('compressed_iron_plate'));

	event.add(global.id.M('rods'), global.id.KJ('compressed_iron_rod'));
	event.add(global.id.M('rods/compressed_iron'), global.id.KJ('compressed_iron_rod'));

	event.add(global.id.M('gears'), global.id.KJ('iron_gear'));
	event.add(global.id.M('gears/iron'), global.id.KJ('iron_gear'));
	event.add(global.id.M('gears'), global.id.KJ('steel_gear'));
	event.add(global.id.M('gears/steel'), global.id.KJ('steel_gear'));
});

ServerEvents.recipes(event => {

	//Compressed Steel Plate Recipe
	
	event.recipes.create.pressing(global.tag.M('plates/compressed_iron'), global.tag.M('ingots/compressed_iron'));
  
	//Steel Gear Recipe
  
	event.shaped(
	
		Item.of('kubejs:steel_gear'),
		[
			' S ',
			'SIS',
			' S '
		],
		{
			I: global.tag.M('ingots/iron'),
			S: global.tag.M('ingots/steel')
		}
	);

	//Iron Gear Recipe

	event.shaped(
		Item.of('kubejs:iron_gear'),
		[
			' I ',
			'I I',
			' I '
		],
		{
			I: global.tag.M('ingots/iron')
		}
	);
});

