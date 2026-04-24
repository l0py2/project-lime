ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/fluid_tank' });
	event.shaped(
		'create:fluid_tank',
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: '#c:plates/copper',
			B: '#c:glass_blocks'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/item_vault' });
	event.shaped(
		'create:item_vault',
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: '#c:plates/iron',
			B: '#c:barrels/wooden'
		}
	);
	
	event.remove({ id: 'create:crafting/logistics/item_hatch' });
	event.shapeless(
		'create:item_hatch',
		[
			'create:andesite_funnel',
			'#c:plates/iron'
		]
	);
});