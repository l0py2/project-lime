(() => {
StartupEvents.registry('item', event => {
	event
		.create('steel_ingot')
		.displayName('Steel Ingot')
		.tag('c:ingots')
		.tag('c:ingots/steel');
	
	event
		.create('steel_nugget')
		.displayName('Steel Nugget')
		.tag('c:nuggets')
		.tag('c:nuggets/steel');
	
	event
		.create('steel_sheet')
		.displayName('Steel Sheet')
		.tag('c:plates')
		.tag('c:plates/steel');
});

StartupEvents.registry('block', event => {
	event
		.create('steel_block')
		.displayName('Block of Steel')
		.resistance(6)
		.hardness(5)
		.requiresTool(true)
		.tagBoth('c:storage_blocks')
		.tagBoth('c:storage_blocks/steel')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_stone_tool')
		.tagBlock('minecraft:incorrect_for_wooden_tool')
		.tagBlock('minecraft:incorrect_for_gold_tool')
		.soundType('stone');
});
})();