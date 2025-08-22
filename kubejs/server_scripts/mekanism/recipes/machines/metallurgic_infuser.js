ServerEvents.recipes(event => {
	
	//metallurgic_infuser
	
	event.recipes.create.mechanical_crafting('mekanism:metallurgic_infuser', [
		'SSS',
		'SFS',
		'ROR',
		'SFS',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		F: global.id.MC('furnace'),
		O: global.tag.M('plates/osmium'),
		R: global.tag.M('dusts/redstone')
	});
	
	//basic_infusing_factory
  
	event.recipes.create.mechanical_crafting('mekanism:basic_infusing_factory', [
		'SSS',
		'RBR',
		'NZN',
		'RBR',
		'SSS'
	], {
		N: global.tag.M('plates/iron'),
		S: global.tag.M('plates/steel'),
		R: global.tag.M('dusts/redstone'),
		Z: global.id.MK('metallurgic_infuser'),
		B: global.tag.M('circuits/basic')
	});
	
	//advanced_infusing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:advanced_infusing_factory', [
		'DDD',
		'IAI',
		'OYO',
		'IAI',
		'DDD'
	], {
		D: global.tag.M('plates/desh'),
		O: global.tag.M('plates/osmium'),
		Y: global.id.MK('basic_infusing_factory'),
		A: global.tag.M('circuits/advanced'),
		I: global.tag.M('alloys/advanced')
	});
	
	//elite_infusing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:elite_infusing_factory', [
		'JJJ',
		'HEH',
		'GXG',
		'HEH',
		'JJJ'
	], {
		J: global.tag.M('plates/ostrum'),
		X: global.id.MK('advanced_infusing_factory'),
		E: global.tag.M('circuits/elite'),
		H: global.tag.M('alloys/elite'),
		G: global.tag.M('plates/gold')
	});
	
	//ultimate_infusing_factory
	
	event.recipes.create.mechanical_crafting('mekanism:ultimate_infusing_factory', [
		'MMM',
		'KUK',
		'LWL',
		'KUK',
		'MMM'
	], {
		W: global.id.MK('elite_infusing_factory'),
		U: global.tag.M('circuits/ultimate'),
		K: global.tag.M('alloys/ultimate'),
		L: global.tag.M('gems/diamond'),
		M: global.tag.M('plates/calorite')
	});
});