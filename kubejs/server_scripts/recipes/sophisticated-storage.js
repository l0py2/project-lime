ServerEvents.recipes(event => {
	function chestShaped(input, woodType, count) {
		event.shaped(
			Item.of(global.id.SS('chest'), count, `{woodType:"${woodType}"}`),
			[
				'AAA',
				'A A',
				'AAA'
			],
			{
				A: input
			}
		);
	}

	event.remove({ output: global.id.SS('chest') });
	chestShaped(global.tag.MC('planks'), 'oak', 1);
	chestShaped(global.id.MC('acacia_planks'), 'acacia', 1);
	chestShaped(global.id.MC('acacia_log'), 'acacia', 4);
	chestShaped(global.id.MC('birch_planks'), 'birch', 1);
	chestShaped(global.id.MC('birch_log'), 'birch', 4);
	chestShaped(global.id.MC('crimson_planks'), 'crimson', 1);
	chestShaped(global.id.MC('crimson_stem'), 'crimson', 4);
	chestShaped(global.id.MC('dark_oak_planks'), 'dark_oak', 1);
	chestShaped(global.id.MC('dark_oak_log'), 'dark_oak', 4);
	chestShaped(global.id.MC('jungle_planks'), 'jungle', 1);
	chestShaped(global.id.MC('jungle_log'), 'jungle', 4);
	chestShaped(global.id.MC('oak_planks'), 'oak', 1);
	chestShaped(global.id.MC('oak_log'), 'oak', 4);
	chestShaped(global.id.MC('spruce_planks'), 'spruce', 1);
	chestShaped(global.id.MC('spruce_log'), 'spruce', 4);
	chestShaped(global.id.MC('warped_planks'), 'warped', 1);
	chestShaped(global.id.MC('warped_stem'), 'warped', 4);
	chestShaped(global.id.MC('mangrove_planks'), 'mangrove', 1);
	chestShaped(global.id.MC('mangrove_log'), 'mangrove', 4);
	chestShaped(global.id.MC('cherry_planks'), 'cherry', 1);
	chestShaped(global.id.MC('cherry_log'), 'cherry', 4);
	chestShaped(global.id.MC('bamboo_planks'), 'bamboo', 1);
	chestShaped(global.tag.MC('bamboo_blocks'), 'bamboo', 2);

	event.shapeless(
		global.id.MC('chest'),
		[
			global.id.SS('chest')
		]
	);

	event.shapeless(
		Item.of(global.id.SS('chest'), '{woodType:"oak"}'),
		[
			global.id.MC('chest')
		]
	);
});
