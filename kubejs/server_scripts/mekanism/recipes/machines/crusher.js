ServerEvents.recipes(event => {
	
	//crusher
	
	event.recipes.create.mechanical_crafting('mekanism:crusher', [
		'SSS',
		'RBR',
		'LCL',
		'RBR',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		R: global.tag.M('dusts/redstone'),
		B: global.tag.M('circuits/basic'),
		C: global.id.MK('steel_casing'),
		L: global.tag.M('buckets/lava')
	});
	
	//basic_crushing_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_crushing_factory', [
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
		Z: global.id.MK('crusher')
	});
	
	//advanced_crushing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_crushing_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_crushing_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_crushing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_crushing_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_crushing_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_crushing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_crushing_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_crushing_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});