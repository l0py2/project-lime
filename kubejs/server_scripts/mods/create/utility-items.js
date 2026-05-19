ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/filter' });
	event.shaped(
		'create:filter',
		[
			'   ',
			'ABA',
			'   '
		],
		{
			A: '#c:nuggets/iron',
			B: '#c:strings'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/attribute_filter' });
	event.shaped(
		'create:attribute_filter',
		[
			'   ',
			'ABA',
			'   '
		],
		{
			A: '#c:nuggets/brass',
			B: '#c:strings'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/package_filter' });
	event.shaped(
		'create:package_filter',
		[
			'   ',
			'ABA',
			'   '
		],
		{
			A: '#c:nuggets/zinc',
			B: '#c:strings'
		}
	);
});