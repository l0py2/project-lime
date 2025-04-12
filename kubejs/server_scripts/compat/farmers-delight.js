ServerEvents.recipes(event => {
	event.remove({ id: global.id.FD('cutting/tag_dough') });
	event.custom(global.recipes.FD.cutting(
		[global.recipes.itemWithCount(global.tag.M('dough/wheat'))],
		[global.recipes.itemWithCount(global.id.FD('raw_pasta'))],
		global.recipes.itemWithCount(global.tag.M('tools/knives'), 1)
	));

	event.remove({ id: global.id.FD('cooking/dumplings') });
	event.custom(global.recipes.FD.cooking(
		200,
		1.0,
		[
			global.recipes.itemWithCount(global.tag.M('dough/wheat'), 1),
			global.recipes.itemWithCount(global.tag.M('crops/cabbage'), 1),
			global.recipes.itemWithCount(global.tag.M('crops/onion'), 1),
			[
				global.recipes.itemWithCount(global.tag.M('raw_chicken'), 1),
				global.recipes.itemWithCount(global.tag.M('raw_pork'), 1),
				global.recipes.itemWithCount(global.tag.M('raw_beef'), 1),
				global.recipes.itemWithCount(global.id.MC('brown_mushroom'), 1),
			]
		],
		global.recipes.itemWithCount(global.id.FD('dumplings'), 2),
	));
});
