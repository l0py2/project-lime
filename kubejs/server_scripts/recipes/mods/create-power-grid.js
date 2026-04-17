ServerEvents.recipes(event => {
	event.remove({ id: global.id.PG('cutting/copper_wire_cutting') });
	global.recipes.CA.rolling(
		event,
		Ingredient.of(global.tag.M('plates/copper')),
		Item.of(global.id.PG('wire'), 4)
	);
	
	event.remove({ id: global.id.PG('cutting/iron_wire_cutting') });
	global.recipes.CA.rolling(
		event,
		Ingredient.of(global.tag.M('plates/iron')),
		Item.of(global.id.PG('iron_wire'), 4)
	);
	
	event.remove({ id: global.id.PG('cutting/gold_wire_cutting') });
	global.recipes.CA.rolling(
		event,
		Ingredient.of(global.tag.M('plates/gold')),
		Item.of(global.id.PG('golden_wire'), 4)
	);
});