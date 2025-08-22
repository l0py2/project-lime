ServerEvents.recipes(event => {
	
	//tier 1
	
	event.recipes.create.mechanical_crafting(
		Item.of(global.id.AA('tier_1_rocket')),
		[
			'  A  ',
			' BFB ',
			' BGB ',
			' BFB ',
			'CDDDC',
			'C E C'	
		],
		{
			A: global.id.AA('rocket_nose_cone'),
			B: global.tag.M('storage_blocks/steel'),
			C: global.id.AA('rocket_fin'),
			D: global.id.AA('steel_tank'),
			E: global.id.AA('steel_engine'),
			F: global.id.PC('module_expansion_card'),
			G: global.id.PC('programmable_controller')
		}
	);
	
	//tier 2
	
	event.recipes.create.mechanical_crafting(
		Item.of(global.id.AA('tier_2_rocket')),
		[
			'  A  ',
			' HFH ',
			' HGH ',
			' HFH ',
			'CIIIC',
			'C J C'
		],
		{
			A: global.id.AA('rocket_nose_cone'),
			H: global.tag.M('storage_blocks/desh'),
			C: global.id.AA('rocket_fin'),
			I: global.id.AA('desh_tank'),
			J: global.id.AA('desh_engine'),
			F: global.id.PC('module_expansion_card'),
			G: global.id.PC('programmable_controller')
		}
	);
	
	//tier 3
	
	event.recipes.create.mechanical_crafting(
		Item.of(global.id.AA('tier_3_rocket')),
		[
			'  A  ',
			' KFK ',
			' KGK ',
			' KFK ',
			'CLLLC',
			'C M C'
		],
		{
			A: global.id.AA('rocket_nose_cone'),
			K: global.tag.M('storage_blocks/ostrum'),
			C: global.id.AA('rocket_fin'),
			L: global.id.AA('ostrum_tank'),
			M: global.id.AA('ostrum_engine'),
			F: global.id.PC('module_expansion_card'),
			G: global.id.PC('programmable_controller')
		}
	);
	
	//tier 4
	
	event.recipes.create.mechanical_crafting(
		Item.of(global.id.AA('tier_4_rocket')),
		[
			'  A  ',
			' NFN ',
			' NGN ',
			' NFN ',
			'COOOC',
			'C P C'
		],
		{
			A: global.id.AA('rocket_nose_cone'),
			N: global.tag.M('storage_blocks/calorite'),
			C: global.id.AA('rocket_fin'),
			O: global.id.AA('calorite_tank'),
			P: global.id.AA('calorite_engine'),
			F: global.id.PC('module_expansion_card'),
			G: global.id.PC('programmable_controller')
		}
	);
});