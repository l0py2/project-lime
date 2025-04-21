ServerEvents.recipes(event => {
	event.shaped(
		global.id.MC('saddle'),
		[
			'  A',
			'AAA',
			'ABA'
		],
		{
			A: global.id.MC('leather'),
			B: global.tag.M('ingots/iron')
		}
	);

	event.custom(global.recipes.FD.cutting(
		[global.recipes.itemWithCount(global.id.MC('dripstone_block'), 1)],
		[global.recipes.itemWithCount(global.id.MC('pointed_dripstone'), 4)],
		global.recipes.itemWithCount(global.tag.M('tools/pickaxes'), 1)
	));
});
