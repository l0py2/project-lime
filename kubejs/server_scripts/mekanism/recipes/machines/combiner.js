ServerEvents.recipes(event => {
	
	//combiner
	
	event.recipes.create.mechanical_crafting('mekanism:combiner', [
		'SSS',
		'EHE',
		'BCB',
		'EHE',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		C: global.id.MK('steel_casing'),
		B: global.tag.M('cobblestone'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
	});
	
	//basic_combining_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_combining_factory', [
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
		Z: global.id.MK('combiner')
	});
	
	//advanced_combining_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_combining_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_combining_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_combining_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_combining_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_combining_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_combining_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_combining_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_combining_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});