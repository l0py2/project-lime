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

	function barrelShaped(block, slab, woodType, count) {
		event.shaped(
			Item.of(global.id.SS('barrel'), count, `{woodType:"${woodType}"}`),
			[
				'ABA',
				'A A',
				'ABA'
			],
			{
				A: block,
				B: slab
			}
		);
	}

	event.remove({ output: global.id.SS('chest') });
	chestShaped(global.tag.MC('planks'), 'oak', 1);
	chestShaped(global.tag.MC('logs'), 'oak', 4);
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

	event.remove({ output: global.id.SS('barrel') });
	barrelShaped(global.tag.MC('planks'), global.tag.MC('wooden_slabs'), 'oak', 1);
	barrelShaped(global.id.MC('acacia_planks'), global.id.MC('acacia_slab'), 'acacia', 1);
	barrelShaped(global.id.MC('birch_planks'), global.id.MC('birch_slab'), 'birch', 1);
	barrelShaped(global.id.MC('crimson_planks'), global.id.MC('crimson_slab'), 'crimson', 1);
	barrelShaped(global.id.MC('dark_oak_planks'), global.id.MC('dark_oak_slab'), 'dark_oak', 1);
	barrelShaped(global.id.MC('jungle_planks'), global.id.MC('jungle_slab'), 'jungle', 1);
	barrelShaped(global.id.MC('oak_planks'), global.id.MC('oak_slab'), 'oak', 1);
	barrelShaped(global.id.MC('spruce_planks'), global.id.MC('spruce_slab'), 'spruce', 1);
	barrelShaped(global.id.MC('warped_planks'), global.id.MC('warped_slab'), 'warped', 1);
	barrelShaped(global.id.MC('mangrove_planks'), global.id.MC('mangrove_slab'), 'mangrove', 1);
	barrelShaped(global.id.MC('cherry_planks'), global.id.MC('cherry_slab'), 'cherry', 1);
	barrelShaped(global.id.MC('bamboo_planks'), global.id.MC('bamboo_slab'), 'bamboo', 1);
});
