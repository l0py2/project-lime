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
