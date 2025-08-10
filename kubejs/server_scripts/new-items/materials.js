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
	event.recipes.create.milling(global.tag.M('sheets/iron'), item.of(global.tag.M('rods/iron'), 2));
	event.recipes.create.milling(global.tag.M('sheets/compressed_iron'), item.of(global.tag.M('rods/compressed_iron'), 2));
	event.recipes.create.milling(global.tag.M('sheets/steel'), item.of(global.tag.M('rods/steel'), 2));
	event.recipes.create.milling(global.tag.M('sheets/ostrum'), item.of(global.id.KJ('ostrum_rod'), 2));
	event.recipes.create.milling(global.tag.M('sheets/desh'), item.of(global.id.KJ('desh_rod'), 2));
	event.recipes.create.milling(global.tag.M('sheets/calorite'), item.of(global.id.KJ('calorite_rod'), 2));
	
	//Compressed Steel Plate Recipe
	
	event.recipes.create.pressing(global.tag.M('ingots/compressed_iron'), global.tag.M('sheets/compressed_iron'));
  
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

