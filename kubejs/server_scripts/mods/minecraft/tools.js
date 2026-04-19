LootJS.modifiers(event => {
	const lootTables = event.addTableModifier(/.*/);
	lootTables.removeLoot('minecraft:netherite_axe');
	lootTables.removeLoot('minecraft:netherite_pickaxe');
	lootTables.removeLoot('minecraft:netherite_shovel');
	lootTables.removeLoot('minecraft:netherite_hoe');
	lootTables.removeLoot('minecraft:netherite_sword');
});

ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:netherite_axe_smithing' });
	event.remove({ id: 'minecraft:netherite_pickaxe_smithing' });
	event.remove({ id: 'minecraft:netherite_shovel_smithing' });
	event.remove({ id: 'minecraft:netherite_hoe_smithing' });
	event.remove({ id: 'minecraft:netherite_sword_smithing' });
	
	function enchantedTool(pattern, tool) {
		let baseTool = `${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":3}}]`;
		let silkTouchTool = `${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":3,"minecraft:silk_touch":1}}]`;
		
		event.shaped(
			baseTool,
			pattern,
			{
				A: '#minecraft:planks',
				B: '#c:rods/wooden'
			}
		);
		
		event.shapeless(silkTouchTool, [baseTool, '#c:gems/emerald']);
		event.shapeless(baseTool, [silkTouchTool]);
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
	
	event.shaped(
		'minecraft:netherite_sword[unbreakable={}]',
		[
			' A ',
			' A ',
			' B '
		],
		{
			A: '#minecraft:planks',
			B: '#c:rods/wooden'
		}
	);
});