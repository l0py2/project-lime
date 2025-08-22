ServerEvents.recipes(event => {

	//steel_casing

	event.shaped(
	Item.of('mekanism:steel_casing'),
	[
		'ADA',
		'CBC',
		'ADA'
	],
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('circuits/crude'),
		C: global.tag.M('plates/osmium'),
		D: global.tag.M('glass/silica')
	}
	);
	
	//fission_fuel_assembly
	
	event.shaped(
	Item.of('mekanismgenerators:fission_reactor_casing'),
	[
		' F ',
		'FEF',
		' F '
	],
	{
		E: global.id.MK('steel_casing'),
		F: global.tag.M('plates/lead')
	}
	);
	
	//fission_reactor_casing
	
	event.shaped(
	Item.of('mekanismgenerators:fission_fuel_assembly'),
	[
		'ADA',
		'CBC',
		'ADA'
	],
	{
		A: global.tag.M('plates/steel'),
		F: global.tag.M('plates/lead'),
		G: global.id.MK('elite_chemical_tank')
	}
	);
	
	
});