LootJS.modifiers(event => {
	const lootTables = event.addTableModifier(/.*/);
	lootTables.removeLoot('minecraft:netherite_axe');
	lootTables.removeLoot('minecraft:netherite_pickaxe');
	lootTables.removeLoot('minecraft:netherite_shovel');
	lootTables.removeLoot('minecraft:netherite_hoe');
});

ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:netherite_axe_smithing' });
	event.remove({ id: 'minecraft:netherite_pickaxe_smithing' });
	event.remove({ id: 'minecraft:netherite_shovel_smithing' });
	event.remove({ id: 'minecraft:netherite_hoe_smithing' });
	
	function enchantedTool(pattern, tool) {
		let baseTool = `${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":1}}]`;
		let silkTouchTool = `${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":1,"minecraft:silk_touch":1}}]`;
		let improvedTool = `${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":3}}]`;
		let ultimateTool = `${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":5}}]`;
		
		event.shaped(
			baseTool,
			pattern,
			{
				A: '#minecraft:planks',
				B: '#c:rods/wooden'
			}
		);
		
		event.shapeless(silkTouchTool, [baseTool, '#c:gems/emerald']);
		event.shapeless(improvedTool, [baseTool, '#c:ingots/netherite']);
		event.shapeless(ultimateTool, [improvedTool, '#c:nether_stars']);
	}
	
	enchantedTool(
		[
			'AA ',
			'AB ',
			' B ',
		],
		'minecraft:netherite_axe'
	);
	
	enchantedTool(
		[
			'AAA',
			' B ',
			' B ',
		],
		'minecraft:netherite_pickaxe'
	);
	
	enchantedTool(
		[
			' A ',
			' B ',
			' B ',
		],
		'minecraft:netherite_shovel'
	);
	
	enchantedTool(
		[
			'AA ',
			' B ',
			' B ',
		],
		'minecraft:netherite_hoe'
	);
});