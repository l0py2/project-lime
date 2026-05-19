ServerEvents.recipes(event => {
	event.remove({ output: 'create:encased_chain_drive' });
	event.shapeless(
		'create:encased_chain_drive',
		[
			'create:andesite_casing',
			'#c:chains'
		],
	);
	
	event.remove({ output: 'create:belt_connector' });
	event.shaped(
		'2x create:belt_connector',
		[
			'AAA',
			'AAA'
		],
		{
			A: 'minecraft:dried_kelp'
		}
	);
	
	event.remove({ output: 'create:weighted_ejector' });
	event.shaped(
		'create:weighted_ejector',
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