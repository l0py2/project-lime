ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/gantry_carriage' });
	event.shaped(
		'create:gantry_carriage',
		[
			' A ',
			' B '
		],
		{
			A: 'create:mechanical_bearing',
			B: 'create:cogwheel'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/gantry_shaft' });
	event.shapeless(
		Item.of('create:gantry_shaft', 8),
		[
			'create:shaft',
			'#c:dusts/redstone'
		]
	);
	
	event.remove({ id: 'create:crafting/kinetics/linear_chassis' });
	event.shaped(
		Item.of('create:linear_chassis', 6),
		[
			' A ',
			'BBB',
			' A '
		],
		{
			A: 'create:andesite_alloy',
			B: 'create:andesite_casing'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/radial_chassis' });
	event.shaped(
		Item.of('create:radial_chassis', 6),
		[
			' B ',
			'ABA',
			' B '
		],
		{
			A: 'create:andesite_alloy',
			B: 'create:andesite_casing'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/mechanical_drill' });
	event.shaped(
		'create:mechanical_drill',
		[
			' C ',
			'CAC',
			' B '
		],
		{
			A: '#c:storage_blocks/steel',
			B: 'create:brass_casing',
			C: '#c:plates/steel'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/mechanical_saw' });
	event.shaped(
		'create:mechanical_saw',
		[
			' C ',
			'CAC',
			' B '
		],
		{
			A: '#c:ingots/steel',
			B: 'create:brass_casing',
			C: '#c:plates/steel'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/mechanical_harvester' });
	event.shaped(
		'create:mechanical_harvester',
		[
			'CAC',
			'CAC',
			' B '
		],
		{
			A: '#c:ingots/steel',
			B: 'create:brass_casing',
			C: '#c:plates/steel'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/mechanical_plough' });
	event.shaped(
		'create:mechanical_plough',
		[
			'CCC',
			'AAA',
			' B '
		],
		{
			A: '#c:ingots/steel',
			B: 'create:brass_casing',
			C: '#c:plates/steel'
		}
	);
});