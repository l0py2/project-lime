ServerEvents.recipes(event => {
	
	//chemical_injection_chamber
	
	event.recipes.create.mechanical_crafting('mekanism:chemical_injection_chamber', [
		'SSS',
		'HEH',
		'GCG',
		'HEH',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		C: global.id.MK('purification_chamber'),
		G: global.tag.M('plates/gold'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite')
	});
	
	//basic_injecting_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_injecting_factory', [
		'SSS',
		'RBR',
		'NZN',
		'RBR',
		'SSS'
	], {
		N: global.tag.M('plates/iron'),
		S: global.tag.M('plates/steel'),
		R: global.tag.M('dusts/redstone'),
		B: global.tag.M('circuits/basic'),
		Z: global.id.MK('chemical_injection_chamber')
	});
	
	//advanced_injecting_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_injecting_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_injecting_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_injecting_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_injecting_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_injecting_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_injecting_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_injecting_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_injecting_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});