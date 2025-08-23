ServerEvents.recipes(event => {

	//dynamic_tank
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('dynamic_tank'), 4),
	[
		'CAC',
		'ABA',
		'CAC'
	],
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('buckets/empty'),
		C: global.id.CR('fluid_tank')
	}
	);
	
	//dynamic_valve
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('dynamic_valve'), 2),
	[
		'EAE',
		'ADA',
		'EAE'
	],
	{
		A: global.tag.M('plates/steel'),
		D: global.id.PC('programmable_controller'),
		E: global.tag.M('circuits/basic')
	}
	);
	
	//structural_glass
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('structural_glass'), 4),
	[
		'GAG',
		'AFA',
		'GAG'
	],
	{
		A: global.tag.M('plates/steel'),
		F: global.id.PC('pressure_chamber_glass'),
		G: global.id.MK('enriched_iron')
	}
	);
});