ServerEvents.recipes(event => {
	event.remove({
		input: global.id.SP('flax'),
		output: global.id.SP('rope')
	});

	event.shaped(
		Item.of(global.id.SP('rope'), 4),
		[
			'A  ',
			'A  ',
			'   '
		],
		{
			A: global.id.SP('flax')
		}
	);

	event.remove({
		input: global.id.FD('straw'),
		output: global.id.SP('rope')
	});

	event.shaped(
		Item.of(global.id.SP('rope'), 4),
		[
			'AA ',
			'AA ',
			'AA '
		],
		{
			A: global.id.FD('straw')
		}
	);
});
