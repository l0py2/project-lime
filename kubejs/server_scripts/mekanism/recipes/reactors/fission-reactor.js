ServerEvents.recipes(event => {

	//fission_reactor_casing
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fission_reactor_casing'), 4),
	[
		'BCB',
		'CAC',
		'BCB'
	],
	{
		A: global.id.MK('steel_casing'),
		B: global.tag.M('plates/lead'),
		C: global.tag.M('circuits/elite')
	}
	);
	
	//fission_reactor_port
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fission_reactor_port'), 2),
	[
		'CDC',
		'DED',
		'CDC'
	],
	{
		C: global.tag.M('circuits/elite'),
		D: global.id.MG('fission_reactor_casing'),
		E: global.id.PC('programmable_controller')
	}
	);
	
	//fission_reactor_logic_adapter
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fission_reactor_logic_adapter'), 2),
	[
		' F ',
		'FEF',
		' F '
	],
	{
		E: global.id.MG('fission_reactor_port'),
		F: global.tag.M('dusts/redstone')
	}
	);
	
	//reactor_glass
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('reactor_glass'), 4),
	[
		'GBG',
		'BHB',
		'GBG'
	],
	{
		B: global.tag.M('plates/lead'),
		G: global.id.MK('enriched_iron'),
		H: global.id.PC('pressure_chamber_glass')
	}
	);
	
	//fission_fuel_assembly
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fission_fuel_assembly')),
	[
		'BIB',
		'BJB',
		'BIB'
	],
	{
		B: global.tag.M('plates/lead'),
		I: global.tag.M('plates/steel'),
		J: global.id.MK('basic_chemical_tank')
	}
	);
	
	//control_rod_assembly
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('control_rod_assembly')),
	[
		'BCB',
		'IBI',
		'IBI'
	],
	{
		B: global.tag.M('plates/lead'),
		C: global.tag.M('circuits/elite'),
		I: global.tag.M('plates/steel')
	}
	);
});