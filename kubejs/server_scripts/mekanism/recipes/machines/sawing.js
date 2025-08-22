ServerEvents.recipes(event => {
	
	//precision_sawmill
	
	event.recipes.create.mechanical_crafting('mekanism:precision_sawmill', [
		'SSS',
		'NBN',
		'ICI',
		'NBN',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		N: global.tag.M('plates/iron'),
		B: global.tag.M('circuits/basic'),
		C: global.id.MK('steel_casing'),
		I: global.tag.M('alloys/advanced')	
	});
	
	//mekanism:basic_sawing_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_sawing_factory', [
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
		Z: global.id.MK('precision_sawmill')
	});
	
	//advanced_sawing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_sawing_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_sawing_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_sawing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_sawing_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_sawing_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_sawing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_sawing_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_sawing_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});