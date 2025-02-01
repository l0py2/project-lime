ServerEvents.blockLootTables(event => {
	const ores = [
		global.id.MC('iron_ore'),
		global.id.MC('deepslate_iron_ore'),
		global.id.MC('copper_ore'),
		global.id.MC('deepslate_copper_ore'),
		global.id.MC('gold_ore'),
		global.id.MC('deepslate_gold_ore'),
		global.id.IE('ore_aluminum'),
		global.id.IE('deepslate_ore_aluminum'),
		global.id.IE('ore_lead'),
		global.id.IE('deepslate_ore_lead'),
		global.id.IE('ore_silver'),
		global.id.IE('deepslate_ore_silver'),
		global.id.IE('ore_nickel'),
		global.id.IE('deepslate_ore_nickel'),
		global.id.IE('ore_uranium'),
		global.id.IE('deepslate_ore_uranium'),
		global.id.CR('zinc_ore'),
		global.id.CR('deepslate_zinc_ore')
	];

	ores.forEach(ore => {
		event.addBlock(ore, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.survivesExplosion();
				pool.addItem(ore);
			});
		});
	});
});

ServerEvents.recipes(event => {
	const metals = [
		'iron',
		'gold',
		'copper',
		'zinc',
		'silver',
		'lead',
		'aluminum',
		'uranium',
		'nickel'
	];

	metals.forEach(metal => {
		event.remove({ id: global.id.CR(`crushing/${metal}_ore`) });
		event.remove({ id: global.id.CR(`crushing/deepslate_${metal}_ore`) });
		event.remove({ id: global.id.CR(`crushing/raw_${metal}_block`) });
		event.remove({ id: global.id.CR(`crushing/raw_${metal}`) });
		event.remove({ id: global.id.CR(`splashing/crushed_raw_${metal}`) });
		event.remove({ id: global.id.CR(`splashing/immersiveengineering/crushed_raw_${metal}`) });
		event.remove({ id: global.id.IE(`crafting/hammercrushing_${metal}`) });
		event.remove({ id: global.id.IE(`crafting/raw_hammercrushing_${metal}`) });
		event.remove({ id: global.id.IE(`crusher/ore_${metal}`) });
		event.remove({ id: global.id.IE(`crusher/raw_block_${metal}`) });
		event.remove({ id: global.id.IE(`crusher/raw_ore_${metal}`) });
		event.remove({ id: global.id.IE(`arcfurnace/ore_${metal}`) });
		event.remove({ id: global.id.IE(`arcfurnace/raw_ore_${metal}`) });
		event.remove({ id: global.id.IE(`arcfurnace/raw_block_${metal}`) });

		event.recipes.create.milling(
			[
				global.tag.M(`raw_materials/${metal}`),
				Item.of(global.tag.M(`raw_materials/${metal}`)).withChance(0.5)
			],
			global.tag.M(`ores/${metal}`)
		);

		event.recipes.create.crushing(
			[
				global.id.CR(`crushed_raw_${metal}`),
				Item.of(global.id.CR(`crushed_raw_${metal}`)).withChance(0.5),
				Item.of(global.id.CR('experience_nugget')).withChance(0.5)
			],
			global.tag.M(`ores/${metal}`)
		);

		event.custom({
			type: global.id.IE('crusher'),
			energy: 6000,
			input: { tag: global.id.M(`ores/${metal}`) },
			result: {
				base_ingredient: {
					item: global.id.CR(`crushed_raw_${metal}`)
				}
			},
			secondaries: [
				{
					chance: 0.5,
					output: {
						item: global.id.CR(`crushed_raw_${metal}`)
					}
				},
				{
					chance: 0.5,
					output: {
						item: global.id.CR('experience_nugget')
					}
				}
			]
		});

		event.recipes.create.crushing(
			[
				Item.of(global.id.CR(`crushed_raw_${metal}`), 2),
				global.id.CR('experience_nugget')
			],
			global.tag.M(`raw_materials/${metal}`)
		);

		event.custom({
			type: global.id.IE('crusher'),
			energy: 6000,
			input: { tag: global.id.M(`raw_materials/${metal}`) },
			result: {
				base_ingredient: {
					item: global.id.CR(`crushed_raw_${metal}`)
				},
				count: 2
			},
			secondaries: [
				{
					chance: 1,
					output: {
						item: global.id.CR('experience_nugget')
					}
				}
			]
		});

		event.recipes.create.crushing(
			[
				Item.of(global.id.CR(`crushed_raw_${metal}`), 18),
				Item.of(global.id.CR('experience_nugget'), 9)
			],
			global.tag.M(`storage_blocks/raw_${metal}`)
		);

		event.custom({
			type: global.id.IE('crusher'),
			energy: 54000,
			input: { tag: global.id.M(`storage_blocks/raw_${metal}`) },
			result: {
				base_ingredient: {
					item: global.id.CR(`crushed_raw_${metal}`)
				},
				count: 18
			},
			secondaries: [
				{
					chance: 1,
					output: {
						item: global.id.CR('experience_nugget'),
						count: 9
					}
				}
			]
		});

		event.recipes.create.crushing(
			[
				global.tag.M(`dusts/${metal}`),
				Item.of(global.tag.M(`dusts/${metal}`)).withChance(0.5)
			],
			global.id.CR(`crushed_raw_${metal}`)
		);

		event.custom({
			type: global.id.IE('crusher'),
			// Handle missing dusts like zinc dust
			conditions: [{
				type: global.id.M('not'),
				value: {
					type: global.id.M('tag_empty'),
					tag: global.id.M(`dusts/${metal}`)
				}
			}],
			energy: 6000,
			input: { item: global.id.CR(`crushed_raw_${metal}`) },
			result: {
				base_ingredient: { tag: global.id.M(`dusts/${metal}`) }
			},
			secondaries: [
				{
					chance: 0.5,
					output: {
						tag: global.id.M(`dusts/${metal}`)
					}
				}
			]
		});

		event.custom({
			type: global.id.IE('arc_furnace'),
			additives: [],
			energy: 102400,
			input: {
				tag: global.id.M(`ores/${metal}`)
			},
			results: [
				{
					base_ingredient: { tag: global.id.M(`ingots/${metal}`) },
					count: 6
				}
			],
			slag: { tag: global.id.M('slag') },
			time: 200
		});

		event.custom({
			type: global.id.IE('arc_furnace'),
			additives: [],
			energy: 25600,
			input: {
				tag: global.id.M(`raw_materials/${metal}`)
			},
			results: [
				{
					base_ingredient: { tag: global.id.M(`ingots/${metal}`) },
					count: 3
				}
			],
			time: 100
		});

		event.custom({
			type: global.id.IE('arc_furnace'),
			additives: [],
			energy: 230400,
			input: {
				tag: global.id.M(`storage_blocks/raw_${metal}`)
			},
			results: [
				{
					base_ingredient: { tag: global.id.M(`ingots/${metal}`) },
					count: 27
				}
			],
			time: 900
		});

		event.custom({
			type: global.id.IE('arc_furnace'),
			additives: [],
			energy: 25600,
			input: {
				item: global.id.CR(`crushed_raw_${metal}`)
			},
			results: [
				{
					base_ingredient: { tag: global.id.M(`ingots/${metal}`) },
					count: 1
				}
			],
			time: 100
		});
	});

	function metalOreWashing(metal, commonSecondary, rareSecondary) {
		const results = [
			Item.of(global.tag.M(`nuggets/${metal}`), 18)
		];

		if(commonSecondary != null) {
			results.push(Item.of(commonSecondary, 2).withChance(0.8));
		}

		if(rareSecondary != null) {
			results.push(Item.of(rareSecondary).withChance(0.1));
		}

		event.recipes.create.splashing(
			results,
			global.id.CR(`crushed_raw_${metal}`)
		);
	}

	metalOreWashing('iron', global.tag.M('dusts/redstone'), global.tag.M('nuggets/nickel'));
	metalOreWashing('gold', global.tag.M('gems/quartz'), null);
	metalOreWashing('copper', global.tag.M('clay'), global.tag.M('nuggets/gold'));
	metalOreWashing('zinc', global.tag.M('dusts/sulfur'), null);
	metalOreWashing('silver', null, global.tag.M('nuggets/lead'));
	metalOreWashing('lead', null, global.tag.M('nuggets/silver'));
	metalOreWashing('aluminum', null, null);
	metalOreWashing('uranium', null, global.tag.M('nuggets/lead'));
	metalOreWashing('nickel', null, null);

	event.remove({ id: global.id.CR('crushing/coal_ore') });
	event.remove({ id: global.id.IE('crusher/ore_coal') });
	event.recipes.create.crushing(
		[
			Item.of(global.id.MC('coal'), 4),
			Item.of(global.id.MC('coal')).withChance(0.5),
			Item.of(global.tag.M('dusts/sulfur')).withChance(0.5),
			Item.of(global.id.CR('experience_nugget')).withChance(0.5)
		],
		global.tag.M('ores/coal')
	);
	event.custom({
		type: global.id.IE('crusher'),
		energy: 1600,
		input: {
			tag: global.id.M('ores/coal')
		},
		result: {
			item: global.id.MC('coal'),
			count: 4
		},
		secondaries: [
			{
				chance: 0.5,
				output: {
					item: global.id.MC('coal')
				}
			},
			{
				chance: 0.5,
				output: {
					item: global.id.CR('experience_nugget')
				}
			},
			{
				chance: 0.5,
				output: {
					tag: global.id.M('dusts/sulfur')
				}
			}
		]
	});

	event.remove({ id: global.id.CR('crushing/nether_gold_ore') });

	event.remove({ id: global.id.IE('arcfurnace/netherite_scrap') });
	event.custom({
		type: global.id.IE('arc_furnace'),
		additives: [],
		energy: 512000,
		input: { item: global.id.MC('ancient_debris') },
		results: [
			{
				item: global.id.MC('netherite_scrap'),
				count: 2
			}
		],
		slag: { tag: global.id.M('slag') },
		time: 100
	});
	event.recipes.create.crushing(
		[
			global.id.MC('netherite_scrap'),
			Item.of(global.id.MC('netherite_scrap')).withChance(0.5)
		],
		global.id.MC('ancient_debris')
	);
	event.custom({
		type: global.id.IE('crusher'),
		energy: 6000,
		input: { item: global.id.MC('ancient_debris') },
		result: {
			base_ingredient: {
				item: global.id.MC('netherite_scrap')
			}
		},
		secondaries: [
			{
				chance: 0.5,
				output: {
					item: global.id.MC('netherite_scrap')
				}
			}
		]
	});

	event.remove({ id: global.id.CR('crushing/nether_quartz_ore') });
	event.remove({ id: global.id.IE('crusher/ore_quartz') });
	event.recipes.create.crushing(
		[
			Item.of(global.tag.M('gems/quartz'), 4),
			Item.of(global.tag.M('gems/quartz')).withChance(0.5),
			Item.of(global.tag.M('dusts/sulfur')).withChance(0.5),
			Item.of(global.id.CR('experience_nugget')).withChance(0.5)
		],
		global.tag.M('ores/quartz')
	);
	event.custom({
		type: global.id.IE('crusher'),
		energy: 1600,
		input: {
			tag: global.id.M('ores/quartz')
		},
		result: {
			base_ingredient: {
				tag: global.id.M('gems/quartz')
			},
			count: 4
		},
		secondaries: [
			{
				chance: 0.5,
				output: {
					tag: global.id.M('gems/quartz')
				}
			},
			{
				chance: 0.5,
				output: {
					item: global.id.CR('experience_nugget')
				}
			},
			{
				chance: 0.5,
				output: {
					tag: global.id.M('dusts/sulfur')
				}
			}
		]
	});

	const gems = [
		'emerald',
		'lapis',
		'diamond'
	];

	gems.forEach(gem => {
		event.remove({ id: global.id.CR(`crushing/${gem}_ore`) });
		event.remove({ id: global.id.CR(`crushing/deepslate_${gem}_ore`) });
		event.remove({ id: global.id.IE(`crusher/ore_${gem}`) });

		event.recipes.create.crushing(
			[
				Item.of(global.tag.M(`gems/${gem}`), 4),
				Item.of(global.tag.M(`gems/${gem}`)).withChance(0.5),
				Item.of(global.id.CR('experience_nugget')).withChance(0.5)
			],
			global.tag.M(`ores/${gem}`)
		);
		event.custom({
			type: global.id.IE('crusher'),
			energy: 1600,
			input: {
				tag: global.id.M(`ores/${gem}`)
			},
			result: {
				base_ingredient: {
					tag: global.id.M(`gems/${gem}`)
				},
				count: 4
			},
			secondaries: [
				{
					chance: 0.5,
					output: {
						tag: global.id.M(`gems/${gem}`)
					}
				},
				{
					chance: 0.5,
					output: {
						item: global.id.CR('experience_nugget')
					}
				}
			]
		});
	});
});
