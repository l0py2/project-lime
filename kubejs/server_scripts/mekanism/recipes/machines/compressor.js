ServerEvents.recipes(event => {
	
	//osmium_compressor
	
	event.recipes.create.mechanical_crafting('mekanism:osmium_compressor', [
		'SSS',
		'IAI',
		'BCB',
		'IAI',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		C: global.id.MK('steel_casing'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced'),
		B: global.id.MC('bucket')
	});
	
	//basic_compressing_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_compressing_factory', [
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
		Z: global.id.MK('osmium_compressor')
	});
	
	//advanced_compressing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_compressing_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_compressing_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_compressing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_compressing_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_compressing_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_compressing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_compressing_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_compressing_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});