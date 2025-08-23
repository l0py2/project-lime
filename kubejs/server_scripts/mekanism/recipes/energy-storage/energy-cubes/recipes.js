ServerEvents.recipes(event => {
	
	//basic_energy_cube
	
	event.recipes.create.mechanical_crafting(global.id.MK('basic_energy_cube'), [
		'DBD',
		'ACA',
		'DBD'
	], 
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('batteries'),
		C: global.id.IE('coil_hv'),
		D: global.tag.M('dusts/lithium')
	});
	
	//advanced_energy_cube
	
	event.recipes.create.mechanical_crafting(global.id.MK('advanced_energy_cube'), [
		'FBF',
		'GHG',
		'FBF'
	], 
	{
		B: global.tag.M('batteries'),
		F: global.tag.M('alloys/advanced'),
		G: global.tag.M('circuits/basic'),
		H: global.id.MK('basic_energy_cube')
	});
	
	//elite_energy_cube
	
	event.recipes.create.mechanical_crafting(global.id.MK('elite_energy_cube'), [
		'JBJ',
		'IKI',
		'JBJ'
	], 
	{
		B: global.tag.M('batteries'),
		I: global.tag.M('circuits/advanced'),
		J: global.tag.M('alloys/elite'),
		K: global.id.MK('advanced_energy_cube')
	});
	
	//ultimate_energy_cube
	
	event.recipes.create.mechanical_crafting(global.id.MK('ultimate_energy_cube'), [
		'MBM',
		'LNL',
		'MBM'
	], 
	{
		B: global.tag.M('batteries'),
		L: global.tag.M('circuits/elite'),
		M: global.tag.M('alloys/ultimate'),
		N: global.id.MK('elite_energy_cube')
	});
});