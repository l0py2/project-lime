ServerEvents.recipes(event => {

	//steel_casing

	event.shaped(
	Item.of(global.id.MK('steel_casing')),
	[
		'ADA',
		'CBC',
		'ADA'
	],
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('circuits/crude'),
		C: global.tag.M('plates/osmium'),
		D: global.id.PC('pressure_chamber_glass')
	}
	);
	
	//tier 1 fluid tank
	
	event.shaped(
	Item.of(global.id.MK('basic_fluid_tank')),
	[
		'EAE',
		'ABA',
		'EAE'
	],
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('circuits/crude'),
		E: global.id.CR('fluid_tank')
	}
	);
	
	//tier 2 fluid tank
	
	event.shaped(
	Item.of(global.id.MK('advanced_fluid_tank')),
	[
		'FAF',
		'AGA',
		'FAF'
	],
	{
		A: global.tag.M('plates/steel'),
		F: global.tag.M('alloys/advanced'),
		G: global.id.MK('basic_fluid_tank')
	}
	);
	
	//tier 3 fluid tank
	
	event.shaped(
	Item.of(global.id.MK('elite_fluid_tank')),
	[
		'HAH',
		'AIA',
		'HAH'
	],
	{
		A: global.tag.M('plates/steel'),
		H: global.tag.M('alloys/elite'),
		I: global.id.MK('advanced_fluid_tank')
	}
	);
	
	//tier 4 fluid tank
	
	event.shaped(
	Item.of(global.id.MK('ultimate_fluid_tank')),
	[
		'JAJ',
		'AKA',
		'JAJ'
	],
	{
		A: global.tag.M('plates/steel'),
		J: global.tag.M('alloys/ultimate'),
		K: global.id.MK('elite_fluid_tank')
	}
	);

	//tier 1 chemical tank
	
	event.shaped(
	Item.of(global.id.MK('basic_chemical_tank')),
	[
		'ELE',
		'LBL',
		'ELE'
	],
	{
		L: global.tag.M('plates/osmium'),
		B: global.tag.M('circuits/crude'),
		E: global.id.CR('fluid_tank')
	}
	);
	
	//tier 2 chemical tank
	
	event.shaped(
	Item.of(global.id.MK('advanced_chemical_tank')),
	[
		'JLJ',
		'LKL',
		'JLJ'
	],
	{
		J: global.tag.M('alloys/advanced'),
		K: global.id.MK('basic_chemical_tank'),
		L: global.tag.M('plates/osmium')
	}
	);
	
	//tier 3 chemical tank
	
	event.shaped(
	Item.of(global.id.MK('elite_chemical_tank')),
	[
		'OLO',
		'LML',
		'OLO'
	],
	{
		O: global.tag.M('alloys/elite'),
		M: global.id.MK('advanced_chemical_tank'),
		L: global.tag.M('plates/osmium')
	}
	);
	
	//tier 4 chemical tank
	
	event.shaped(
	Item.of(global.id.MK('ultimate_chemical_tank')),
	[
		'PLP',
		'LNL',
		'PLP'
	],
	{
		P: global.tag.M('alloys/ultimate'),
		N: global.id.MK('elite_chemical_tank'),
		L: global.tag.M('plates/osmium')
	}
	);
	
	//energy_tablet
	
	event.shaped(
	Item.of(global.id.MK('energy_tablet')),
	[
		'RSR',
		'JQJ',
		'RSR'
	],
	{
		J: global.tag.M('alloys/advanced'),
		S: global.tag.M('plates/gold'),
		Q: global.id.IE('wirecoil_steel'),
		R: global.id.IE('capacitor_hv')
	}
	);
});