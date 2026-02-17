//priority: 8

ServerEvents.recipes(event => {	
	global.cutting.addConversionRecipes(
		event,
		global.id.SG('blank_mold'),
		[
			global.id.SG('small_casing_mold'),
			global.id.SG('medium_casing_mold'),
			global.id.SG('large_casing_mold'),
			global.id.SG('bullet_mold'),
			global.id.SG('gun_parts_mold'),
			global.id.SG('disc_mold')
		]
	);
	
	event.shaped(
		global.id.SG('blank_mold'),
		[
			' A ',
			'AAA',
			' A '
		],
		{ A: global.id.SG('anthralite_ingot') }
	);
});