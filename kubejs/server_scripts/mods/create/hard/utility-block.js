//packmode: hard

ServerEvents.recipes(event => {
	potato.recipes.applyEvent(event);
	
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
	
	event.remove({ id: 'create:crafting/kinetics/mechanical_crafter' });
	event.shaped(
		Item.of('create:mechanical_crafter', 3),
		[
			' D ',
			'ABA',
			' C '
		],
		{
			A: 'create:electron_tube',
			B: 'create:brass_casing',
			C: 'minecraft:crafting_table',
			D: 'create:precision_mechanism'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/rotation_speed_controller' });
	potato.event.create_mechanical_crafting(
		[
			' A ',
			'DCD',
			' B '
		],
		{
			A: 'create:precision_mechanism',
			B: 'create:brass_casing',
			C: 'create:gearshift',
			D: 'create:electron_tube'
		},
		'create:rotation_speed_controller'
	);
	
	event.remove({ id: 'create:crafting/kinetics/mechanical_arm' });
	potato.event.create_mechanical_crafting(
		[
			'BBC',
			'B  ',
			'AED'
		],
		{
			A: 'create:precision_mechanism',
			B: '#c:plates/brass',
			C: 'create:brass_hand',
			D: 'create:brass_casing',
			E: 'create:cogwheel'
		},
		'create:mechanical_arm'
	);
	
	event.remove({ id: 'create:crafting/kinetics/sequenced_gearshift' });
	event.shapeless(
		'create:sequenced_gearshift',
		[
			'create:electron_tube',
			'create:cogwheel',
			'create:gearshift'
		]
	);
	
	event.remove({ id: 'create:crafting/kinetics/item_drain' });
	event.shaped(
		'create:item_drain',
		[
			' B ',
			' A ',
			'   '
		],
		{
			A: 'create:copper_casing',
			B: 'create:fluid_pipe'
		}
	);
});