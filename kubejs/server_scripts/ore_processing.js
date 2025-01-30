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
