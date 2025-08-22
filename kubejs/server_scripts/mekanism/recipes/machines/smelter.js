ServerEvents.recipes(event => {
	
	//energized_smelter
	
	event.recipes.create.mechanical_crafting('mekanism:energized_smelter', [
		'SSS',
		'RBR',
		'GCG',
		'RBR',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		R: global.tag.M('dusts/redstone'),
		B: global.tag.M('circuits/basic'),
		C: global.id.MK('steel_casing'),
		G: global.tag.M('glass/silica')
	});
	
	//basic_smelting_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_smelting_factory', [
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
		Z: global.id.MK('energized_smelter')
	});
	
	//advanced_smelting_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_smelting_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_smelting_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_smelting_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_smelting_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_smelting_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_smelting_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_smelting_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_smelting_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});