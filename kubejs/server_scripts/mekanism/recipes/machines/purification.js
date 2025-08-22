ServerEvents.recipes(event => {
	
	//purification_chamber
	
	event.recipes.create.mechanical_crafting('mekanism:purification_chamber', [
		'SSS',
		'IAI',
		'OCO',
		'IAI',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		C: global.id.MK('enrichment_chamber'),
		O: global.tag.M('plates/osmium'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//basic_purifying_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_purifying_factory', [
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
		Z: global.id.MK('purification_chamber')
	});
	
	//advanced_purifying_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_purifying_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_purifying_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_purifying_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_purifying_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_purifying_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_purifying_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_purifying_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_purifying_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});