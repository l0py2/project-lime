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
	
	function enchantTool(tool) {
		event.shapeless(
			`${tool}[unbreakable={},enchantments={levels:{"minecraft:silk_touch":1}}]`,
			[
				`${tool}[unbreakable={}]`,
				'#c:gems/emerald'
			]
		);
		
		event.shapeless(
			`${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":5}}]`,
			[
				`${tool}[unbreakable={}]`,
				'#c:ingots/netherite'
			]
		);
		
		event.shapeless(
			`${tool}[unbreakable={},enchantments={levels:{"minecraft:silk_touch":1,"minecraft:efficiency":5}}]`,
			[
				`${tool}[unbreakable={},enchantments={levels:{"minecraft:silk_touch":1}}]`,
				'#c:ingots/netherite'
			]
		);
		
		event.shapeless(
			`${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":5,"minecraft:silk_touch":1}}]`,
			[
				`${tool}[unbreakable={},enchantments={levels:{"minecraft:efficiency":5}}]`,
				'#c:gems/emerald'
			]
		);
	}
	
	event.shaped(
		'minecraft:netherite_axe[unbreakable={}]',
		[
			'AA ',
			'AB ',
			' B '
		],
		{
			A: '#minecraft:planks',
			B: '#c:rods/wooden'
		}
	);
	
	enchantTool('minecraft:netherite_axe');
	
	event.shaped(
		'minecraft:netherite_pickaxe[unbreakable={}]',
		[
			'AAA',
			' B ',
			' B '
		],
		{
			A: '#minecraft:planks',
			B: '#c:rods/wooden'
		}
	);
	
	enchantTool('minecraft:netherite_pickaxe');	
	
	event.shaped(
		'minecraft:netherite_shovel[unbreakable={}]',
		[
			' A ',
			' B ',
			' B '
		],
		{
			A: '#minecraft:planks',
			B: '#c:rods/wooden'
		}
	);
	
	enchantTool('minecraft:netherite_shovel');
	
	event.shaped(
		'minecraft:netherite_hoe[unbreakable={}]',
		[
			'AA ',
			' B ',
			' B '
		],
		{
			A: '#minecraft:planks',
			B: '#c:rods/wooden'
		}
	);
	
	enchantTool('minecraft:netherite_hoe');
	
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