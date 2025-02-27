ServerEvents.blockLootTables(event => {
	const ores = [
		global.id.MC('iron_ore'),
		global.id.MC('deepslate_iron_ore'),
		global.id.MC('copper_ore'),
		global.id.MC('deepslate_copper_ore'),
		global.id.MC('gold_ore'),
		global.id.MC('deepslate_gold_ore')
	];

	for(const ore of ores) {
		event.addBlock(ore, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.survivesExplosion();
				pool.addItem(ore);
			});
		});
	}
});

ServerEvents.recipes(event => {
	const ores = [
		'coal',
		'iron',
		'copper',
		'gold',
		'redstone',
		'emerald',
		'lapis',
		'diamond',
		'quartz'
	];

	for(const ore of ores) {
		event.remove({
			type: global.id.MC('smelting'),
			input: global.tag.M(`ores/${ore}`)
		});

		event.remove({
			type: global.id.MC('smelting'),
			input: global.tag.M(`raw_materials/${ore}`)
		});
	}
});
