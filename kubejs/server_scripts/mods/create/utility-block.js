ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/spout' });
	event.shaped(
		'create:spout',
		[
			' A ',
			' B ',
			'   '
		],
		{
			A: 'create:fluid_tank',
			B: 'minecraft:dried_kelp'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/hose_pulley' });
	event.shaped(
		'create:hose_pulley',
		[
			'DBD',
			' C ',
			' A '
		],
		{
			A: 'create:spout',
			B: 'create:copper_casing',
			C: 'minecraft:lead',
			D: '#c:plates/copper'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/portable_fluid_interface' });
	event.shaped(
		'create:portable_fluid_interface',
		[
			' D ',
			' B ',
			' A '
		],
		{
			A: 'create:smart_chute',
			B: 'create:copper_casing',
			D: 'create:precision_mechanism'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/portable_storage_interface' });
	event.shaped(
		'create:portable_storage_interface',
		[
			' D ',
			' B ',
			' A '
		],
		{
			A: 'create:smart_chute',
			B: 'create:andesite_casing',
			D: 'create:precision_mechanism'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/mechanical_piston' });
	event.shaped(
		'create:mechanical_piston',
		[
			' A ',
			' B '
		],
		{
			A: 'minecraft:piston',
			B: 'create:piston_extension_pole'
		}
	);

	event.remove({ id: 'create:crafting/kinetics/piston_extension_pole' });
	event.shaped(
		Item.of('create:piston_extension_pole', 8),
		[
			' A ',
			' B ',
			' A '
		],
		{
			A: '#minecraft:planks',
			B: 'create:shaft'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/rope_pulley' });
	event.shaped(
		'create:rope_pulley',
		[
			' A ',
			' C ',
			' B '
		],
		{
			A: 'create:andesite_casing',
			B: '#c:plates/iron',
			C: 'minecraft:lead'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/elevator_pulley' });
	event.shaped(
		'create:elevator_pulley',
		[
			' A ',
			' C ',
			' B '
		],
		{
			A: 'create:brass_casing',
			B: '#c:plates/steel',
			C: 'minecraft:lead'
		}
	);
});