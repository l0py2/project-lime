ServerEvents.recipes(event => {
	
	//turbine_casing
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('turbine_casing'), 4), 
	[
		'ABA',
		'BCB',
		'ABA'
	], 
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('plates/osmium'),
		C: global.id.MK('steel_casing')
	});
	
	//rotational_complex
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('rotational_complex')), 
	[
		'ADA',
		'EDE',
		'ADA'
	],
	{
		A: global.tag.M('plates/steel'),
		D: global.tag.M('alloys/advanced'),
		E: global.tag.M('circuits/advanced')
	});
	
	//turbine_blade
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('turbine_blade')), 
	[
		' A ',
		'ADA',
		' A '
	], 
	{
		A: global.tag.M('plates/steel'),
		D: global.tag.M('alloys/advanced')
	});
	
	//turbine_rotor
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('turbine_rotor')), 
	[
		'ADA',
		'ADA',
		'ADA'
	], 
	{
		A: global.tag.M('plates/steel'),
		D: global.tag.M('alloys/advanced')
	});
	
	//turbine_vent
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('turbine_vent'), 2), 
	[
		' F ',
		'FGF',
		' F '
	], 
	{
		F: global.id.MG('turbine_casing'),
		G: global.id.AA('vent')
	});
	
	//saturating_condensor
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('saturating_condenser')), 
	[
		'AHA',
		'HIH',
		'AHA'
	], 
	{
		A: global.tag.M('plates/steel'),
		H: global.tag.M('plates/tin'),
		I: global.id.CR('fluid_tank')
	});
	
	//pressure_disperser
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('pressure_disperser')), 
	[
		'AJA',
		'KDK',
		'AJA'
	], {
		A: global.tag.M('plates/steel'),
		J: global.id.MG('saturating_condenser'),
		K: global.id.MG('turbine_vent'),
		D: global.tag.M('alloys/advanced')
	});
	
	//electromagnetic_coil
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('electromagnetic_coil')), 
	[
		'ALA',
		'LML',
		'ALA'
	], 
	{
		A: global.tag.M('plates/steel'),
		L: global.id.IE('wirecoil_steel'),
		M: global.tag.M('batteries')
	});
	
	//turbine_valve
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('turbine_valve'), 2), 
	[
		'ENE',
		'NPN',
		'ENE'
	], 
	{
		N: global.id.MG('turbine_casing'),
		E: global.tag.M('circuits/advanced'),
		P: global.id.PC('programmable_controller')
	});
});