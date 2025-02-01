ServerEvents.recipes(event => {
	const removedRecipes = [
		'tacz:gunpowder',
		'immersiveengineering:crafting/gunpowder_from_dusts'
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

});
