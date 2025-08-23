ServerEvents.recipes(event => {

	//thermal_evaporation_block
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('thermal_evaporation_block'), 4),
	[
		'CAC',
		'ABA',
		'CAC'
	],
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('plates/copper'),
		C: global.id.CR('fluid_tank')
	}
	);
	
	//thermal_evaporation_controller
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('thermal_evaporation_controller')),
	[
		'EFE',
		'DCD',
		'DDD'
	],
	{
		C: global.id.CR('fluid_tank'),
		D: global.id.MK('thermal_evaporation_block'),
		E: global.tag.M('circuits/advanced'),
		F: global.id.PC('programmable_controller')
	}
	);
	
	//thermal_evaporation_valve
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('thermal_evaporation_valve'), 2),
	[
		'EDE',
		'DFD',
		'EDE'
	],
	{
		D: global.id.MK('thermal_evaporation_block'),
		E: global.tag.M('circuits/advanced'),
		F: global.id.PC('programmable_controller')
	}
	);
});