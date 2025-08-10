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
	event.recipes.create.milling(global.tag.M('sheets/iron'), item.of(global.tag.M('rods/iron'), 2))
	event.recipes.create.milling(global.tag.M('sheets/compressed_iron'), item.of(global.tag.M('rods/compressed_iron'), 2))
	event.recipes.create.milling(global.tag.M('sheets/steel'), item.of(global.tag.M('rods/steel'), 2))
  
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
	)

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
		)
})

