ServerEvents.recipes(event => {
	const removedRecipes = [
		'tacz:gunpowder',
		'immersiveengineering:crafting/gunpowder_from_dusts',
		'create:crushing/blaze_rod',
		'immersiveengineering:crusher/blaze_powder'
	];

	removedRecipes.forEach(recipe => {
		event.remove({ id: recipe });
	});

	event.shaped(
		Item.of(global.tag.M('gunpowder'), 6),
		[
			'AAA',
			'ABC',
			'   '
		],
		{
			A: global.tag.M('dusts/saltpeter'),
			B: global.tag.M('dusts/sulfur'),
			C: global.id.MC('coal')
		}
	);

	event.shaped(
		Item.of(global.tag.M('gunpowder'), 9),
		[
			'AAA',
			'ABC',
			'   '
		],
		{
			A: global.tag.M('dusts/saltpeter'),
			B: global.tag.M('dusts/sulfur'),
			C: global.id.MC('charcoal')
		}
	);

	event.shaped(
		Item.of(global.tag.M('gunpowder'), 12),
		[
			'AAA',
			'ABC',
			'   '
		],
		{
			A: global.tag.M('dusts/saltpeter'),
			B: global.tag.M('dusts/sulfur'),
			C: global.tag.M('coal_coke')
		}
	);

	event.recipes.create.crushing(
		[
			Item.of(global.id.MC('blaze_powder'), 4),
			Item.of(global.id.MC('blaze_powder')).withChance(0.5),
			Item.of(global.tag.M('dusts/sulfur')).withChance(0.5)
		],
		global.tag.M('rods/blaze')
	);

	event.custom({
		type: global.id.IE('crusher'),
		energy: 1600,
		input: {
			tag: global.id.M('rods/blaze')
		},
		result: {
			count: 4,
			item: global.id.MC('blaze_powder')
		},
		secondaries: [
			{
				chance: 0.5,
				output: {
					item: global.id.MC('blaze_powder')
				}
			},
			{
				chance: 0.5,
				output: {
					tag: global.id.M('dusts/sulfur')
				}
			}
		]
	});
});
