ServerEvents.tags('item', event => {
	event.add(global.id.M('plates'), global.id.KJ('compressed_iron_plate'));
	event.add(global.id.M('plates/compressed_iron'), global.id.KJ('compressed_iron_plate'));

	event.add(global.id.M('rods'), global.id.KJ('compressed_iron_rod'));
	event.add(global.id.M('rods/compressed_iron'), global.id.KJ('compressed_iron_rod'));
	event.add(global.id.M('rods'), global.id.KJ('calorite_rod'));
	event.add(global.id.M('rods/calorite'), global.id.KJ('calorite_rod'));
	event.add(global.id.M('rods'), global.id.KJ('desh_rod'));
	event.add(global.id.M('rods/desh'), global.id.KJ('desh_rod'));
	event.add(global.id.M('rods'), global.id.KJ('ostrum_rod'));
	event.add(global.id.M('rods/ostrum'), global.id.KJ('ostrum_rod'));

	event.add(global.id.M('gears'), global.id.KJ('iron_gear'));
	event.add(global.id.M('gears/iron'), global.id.KJ('iron_gear'));
	event.add(global.id.M('gears'), global.id.KJ('steel_gear'));
	event.add(global.id.M('gears/steel'), global.id.KJ('steel_gear'));

	event.add(global.id.M('circuits'), global.id.PC('printed_circuit_board'));
	event.add(global.id.M('circuits/crude'), global.id.PC('printed_circuit_board'));

	event.add(global.id.M('plates'), global.id.KJ('tin_plate'));
	event.add(global.id.M('plates/tin'), global.id.KJ('tin_plate'));
	event.add(global.id.M('plates'), global.id.KJ('bronze_plate'));
	event.add(global.id.M('plates/bronze'), global.id.KJ('bronze_plate'));
	event.add(global.id.M('plates'), global.id.KJ('osmium_plate'));
	event.add(global.id.M('plates/osmium'), global.id.KJ('osmium_plate'));
	event.add(global.id.M('plates'), global.id.KJ('lead_plate'));
	event.add(global.id.M('plates/lead'), global.id.KJ('lead_plate'));
	event.add(global.id.M('plates'), global.id.KJ('refined_obsidian_plate'));
	event.add(global.id.M('plates/refined_obsidian'), global.id.KJ('refined_obsidian_plate'));
	event.add(global.id.M('plates'), global.id.KJ('refined_glowstone_plate'));
	event.add(global.id.M('plates/refined_glowstone'), global.id.KJ('refined_glowstone_plate'));
	event.add(global.id.M('plates'), global.id.KJ('refined_glowstone_plate'));
	event.add(global.id.M('plates/refined_glowstone'), global.id.KJ('refined_glowstone_plate'));
	event.add(global.id.M('plates'), global.id.KJ('uranium_plate'));
	event.add(global.id.M('plates/uranium'), global.id.KJ('uranium_plate'));
});

ServerEvents.recipes(event => {

	//plates recipes

	event.recipes.create.pressing(global.tag.M('plates/compressed_iron'), global.tag.M('ingots/compressed_iron'));
	event.recipes.create.pressing(global.tag.M('plates/tin'), global.tag.M('ingots/tin'));
	event.recipes.create.pressing(global.tag.M('plates/bronze'), global.tag.M('ingots/bronze'));
	event.recipes.create.pressing(global.tag.M('plates/osmium'), global.tag.M('ingots/osmium'));
	event.recipes.create.pressing(global.tag.M('plates/uranium'), global.tag.M('ingots/uranium'));
	event.recipes.create.pressing(global.tag.M('plates/lead'), global.tag.M('ingots/lead'));
	event.recipes.create.pressing(global.tag.M('plates/refined_obsidian'), global.tag.M('ingots/refined_obsidian'));
	event.recipes.create.pressing(global.tag.M('plates/refined_glowstone'), global.tag.M('ingots/refined_glowstone'));

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

	event.custom(global.recipes.CA.rolling(
		Item.of(global.tag.M('ingots/compressed_iron'), 1),
		Item.of(global.id.KJ('compressed_iron_rod'), 2)
	));

	event.custom(global.recipes.CA.rolling(
		Item.of(global.tag.M('ingots/calorite'), 1),
		Item.of(global.id.KJ('calorite_rod'), 2)
	));

	event.custom(global.recipes.CA.rolling(
		Item.of(global.tag.M('ingots/desh'), 1),
		Item.of(global.id.KJ('desh_rod'), 2)
	));

	event.custom(global.recipes.CA.rolling(
		Item.of(global.tag.M('ingots/ostrum'), 1),
		Item.of(global.id.KJ('ostrum_rod'), 2)
	));

	event.custom(global.recipes.CA.rolling(
		Item.of(global.tag.M('ingots/steel'), 1),
		Item.of(global.id.IE('steel_rod'), 2)
	));

	event.custom(global.recipes.CA.rolling(
		Item.of(global.tag.M('ingots/iron'), 1),
		Item.of(global.id.IE('iron_rod'), 2)
	));
});
