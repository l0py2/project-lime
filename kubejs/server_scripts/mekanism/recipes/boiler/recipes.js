ServerEvents.recipes(event => {

	//boiler_casing
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('boiler_casing'), 4),
	[
		'CAC',
		'ABA',
		'CAC'
	],
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('plates/iron'),
		C: global.tag.M('plates/tin')
	}
	);
	
	//boiler_valve
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('boiler_valve'), 2),
	[
		'EDE',
		'DFD',
		'EDE'
	],
	{
		D: global.id.MK('boiler_casing'),
		E: global.tag.M('circuits/advanced'),
		F: global.id.PC('programmable_controller')
	}
	);
	
	//superheating_element
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('superheating_element')),
	[
		'AGA',
		'GFG',
		'AGA'
	],
	{
		A: global.tag.M('plates/steel'),
		G: global.tag.M('plates/copper'),
		F: global.id.MK('steel_casing')
	}
	);
});