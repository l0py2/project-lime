ServerEvents.recipes(event => {
	event.remove({ id: global.id.BC('cooking/scarlet_pierogi') });
	event.custom(global.recipes.FD.cooking(
		200,
		1.0,
		[
			global.recipes.itemWithCount(global.id.BC('scarlet_cheese_wedge'), 1),
			global.recipes.itemWithCount(global.tag.M('vegetables/potato'), 1),
			global.recipes.itemWithCount(global.tag.M('dough/wheat'), 1),
			global.recipes.itemWithCount(global.id.MC('nether_wart'), 1),
			global.recipes.itemWithCount(global.tag.FD('cabbage_roll_ingredients'), 1),
		],
		global.recipes.itemWithCount(global.id.BC('scarlet_pierogi'), 1),
	));
});
