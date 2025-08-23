ServerEvents.recipes(event => {

	//sps_casing
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('sps_casing')),
	[
		'ABA',
		'BCB',
		'ABA'
	],
	{
		A: global.id.MK('hdpe_sheet'),
		B: global.tag.M('pellets/polonium'),
		C: global.tag.M('pellets/plutonium')
	}
	);
	
	//sps_port
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MK('sps_port')),
	[
		'EDE',
		'DFD',
		'EDE'
	],
	{
		D: global.id.MK('sps_casing'),
		E: global.tag.M('circuits/ultimate'),
		F: global.id.PC('programmable_controller')
	}
	);
});