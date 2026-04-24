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
});