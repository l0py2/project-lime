ServerEvents.recipes(event => {
	
	//induction_casing
	
	event.recipes.create.mechanical_crafting(global.id.MK('induction_casing'), [
		'CAC',
		'ABA',
		'CAC'
	], 
	{
		A: global.tag.M('plates/steel'),
		B: global.tag.M('batteries'),
		C: global.tag.M('plates/tin')
	});
	
	//induction_port
	
	event.recipes.create.mechanical_crafting(global.id.MK('induction_port'), [
		'FDF',
		'DED',
		'FDF'
	],
	{
		D: global.id.MK('induction_casing'),
		E: global.id.PC('programmable_controller'),
		F: global.tag.M('circuits/elite')
	});
	
	//basic_induction_cell
	
	event.recipes.create.mechanical_crafting(global.id.MK('basic_induction_cell'), [
		'GBG',
		'BHB',
		'GBG'
	], 
	{
		B: global.tag.M('batteries'),
		G: global.tag.M('dusts/lithium'),
		H: global.id.MK('basic_energy_cube')
	});
	
	//advanced_induction_cell
	
	event.recipes.create.mechanical_crafting(global.id.MK('advanced_induction_cell'), [
		'BIB',
		'IJI',
		'BIB'
	], 
	{
		B: global.tag.M('batteries'),
		I: global.id.MK('basic_induction_cell'),
		J: global.id.MK('advanced_energy_cube')
	});
	
	//elite_induction_cell
	
	event.recipes.create.mechanical_crafting(global.id.MK('elite_induction_cell'), [
		'BKB',
		'KLK',
		'BKB'
	],
	{
		B: global.tag.M('batteries'),
		K: global.id.MK('advanced_induction_cell'),
		L: global.id.MK('elite_energy_cube')
	});
	
	//ultimate_induction_cell
	
	event.recipes.create.mechanical_crafting(global.id.MK('ultimate_induction_cell'), [
		'BMB',
		'MNM',
		'BMB'
	], 
	{
		B: global.tag.M('batteries'),
		M: global.id.MK('elite_induction_cell'),
		N: global.id.MK('ultimate_energy_cube')
	});
	
	//basic_induction_provider
	
	event.recipes.create.mechanical_crafting(global.id.MK('basic_induction_provider'), [
		'GOG',
		'OHO',
		'GOG'
	], 
	{
		G: global.tag.M('dusts/lithium'),
		H: global.id.MK('basic_energy_cube'),
		O: global.tag.M('circuits/basic')
	});
	
	//advanced_induction_provider
	
	event.recipes.create.mechanical_crafting(global.id.MK('advanced_induction_provider'), [
		'QPQ',
		'PJP',
		'QPQ'
	], 
	{
		J: global.id.MK('advanced_energy_cube'),
		P: global.id.MK('basic_induction_provider'),
		Q: global.tag.M('circuits/advanced')
	});	
	
	//elite_induction_provider
	
	event.recipes.create.mechanical_crafting(global.id.MK('elite_induction_provider'), [
		'FSF',
		'SLS',
		'FSF'
	], 
	{
		L: global.id.MK('elite_energy_cube'),
		F: global.tag.M('circuits/elite'),
		S: global.id.MK('advanced_induction_provider')
	});
	
	//ultimate_induction_provider
	
	event.recipes.create.mechanical_crafting(global.id.MK('ultimate_induction_provider'), [
		'TUT',
		'UNU',
		'TUT'
	], 
	{
		N: global.id.MK('ultimate_energy_cube'),
		T: global.tag.M('circuits/ultimate'),
		U: global.id.MK('elite_induction_provider'),	
	});
});