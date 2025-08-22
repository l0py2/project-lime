ServerEvents.recipes(event => {
	
	//enrichment_chamber
	
	event.recipes.create.mechanical_crafting('mekanism:enrichment_chamber', [
		'SSS',
		'RBR',
		'NCN',
		'RBR',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		C: global.id.MK('steel_casing'),
		B: global.tag.M('circuits/basic'),
		R: global.tag.M('dusts/redstone'),
		N: global.tag.M('plates/iron')
	});
	
	//basic_enriching_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_enriching_factory', [
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
		Z: global.id.MK('enrichment_chamber')
	});
	
	//advanced_enriching_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_enriching_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_enriching_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_enriching_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_enriching_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_enriching_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_enriching_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_enriching_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_enriching_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});