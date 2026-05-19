ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/track_station' });
	event.shapeless(
		Item.of('create:track_station', 2),
		[
			'create:railway_casing',
			'minecraft:lodestone'
		]
	);
	
	event.remove({ id: 'create:crafting/kinetics/controls' });
	event.shaped(
		'create:controls',
		[
			' A ',
			' B ',
			' C '
		],
		{
			A: 'create:linked_controller',
			B: 'create:railway_casing',
			C: 'create:precision_mechanism'
		}
	);
});