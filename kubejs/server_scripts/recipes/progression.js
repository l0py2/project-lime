ServerEvents.tags('item', event => {
	event.add(global.id.KJ('campfires'), global.id.MC('campfire'));
	event.add(global.id.KJ('campfires'), global.id.MC('soul_campfire'));
});

ServerEvents.recipes(event => {
	event.remove({ output: global.id.MC('smoker') });
	event.shaped(
		global.id.MC('smoker'),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			'A': global.tag.MC('logs'),
			'B': global.tag.MC('stone_tool_materials'),
			'C': global.tag.KJ('campfires')
		}
	);
	
	event.campfireCooking(global.id.MC('copper_ingot'), global.tag.MC('copper_ores'));
	event.campfireCooking(global.id.MC('copper_ingot'), global.tag.M('raw_materials/copper'));
	event.campfireCooking(global.id.MC('copper_ingot'), global.id.CR('crushed_raw_copper'));
	
	event.remove({ output: global.id.MC('blast_furnace') });
	event.shaped(
		global.id.MC('blast_furnace'),
		[
			'AAA',
			'B B',
			'CCC'
		],
		{
			'A': global.tag.M('ingots/copper'),
			'B': global.id.MC('clay_ball'),
			'C': global.tag.MC('stone_tool_materials')
		}
	);
});