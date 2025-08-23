ServerEvents.recipes(event => {
	
	//reactor_glass
	
	event.replaceInput(
	{
		output: global.id.MG('reactor_glass')
	},
		global.id.MK('ingot_lead'),
		global.tag.M('plates/lead')
	);
	
	event.replaceInput(
	{
		output: global.id.MG('reactor_glass')
	},
		global.id.MC('glass'),
		global.id.PC('pressure_chamber_glass')
	);

	//fission_reactor_casing
	
	event.shaped(
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
	
	event.shaped(
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
	
	event.shaped(
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
	
	//fission_fuel_assembly
	
	event.replaceInput(
	{
		output: global.id.MG('fission_fuel_assembly')
	},
		global.id.MK('ingot_lead'),
		global.tag.M('plates/lead')
	);
	
	event.replaceInput(
	{
		output: global.id.MG('fission_fuel_assembly')
	},
		global.id.MK('ingot_steel'),
		global.tag.M('plates/steel')
	);
	
	//control_rod_assembly
	
	event.replaceInput(
	{
		output: global.id.MG('control_rod_assembly')
	},
		global.id.MK('ingot_steel'),
		global.tag.M('plates/steel')
	);
	
	event.replaceInput(
	{
		output: global.id.MG('control_rod_assembly')
	},
		global.id.MK('ingot_lead'),
		global.tag.M('plates/lead')
	);
});