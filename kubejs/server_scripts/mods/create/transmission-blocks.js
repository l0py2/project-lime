ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/encased_chain_drive' });
	event.remove({ id: 'create:crafting/kinetics/encased_chain_drive_from_zinc' });
	event.shapeless(
		'create:encased_chain_drive',
		[
			'create:andesite_casing',
			'#c:chains'
		],
	);
	
	event.remove({ id: 'create:crafting/kinetics/belt_connector' });
	event.shaped(
		Item.of('create:belt_connector', 2),
		[
			'AAA',
			'AAA'
		],
		{
			A: 'minecraft:dried_kelp'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/weighted_ejector' });
	event.shaped(
		Item.of('create:weighted_ejector'),
		[
			' A ',
			' B ',
			' C '
		],
		{
			A: '#c:plates/brass',
			B: 'create:depot',
			C: 'create:cogwheel'
		}
	);
});