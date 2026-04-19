LootJS.lootTables(event => {
	const silkTouchBlocks = [
		'minecraft:blue_ice',
		'minecraft:bookshelf',
		'minecraft:campfire',
		'minecraft:chiseled_bookshelf',
		'minecraft:ender_chest',
		'minecraft:gilded_blackstone',
		'minecraft:glass',
		'minecraft:glass_pane',
		'minecraft:ice',
		'minecraft:packed_ice',
		'minecraft:sculk_sensor',
		'minecraft:calibrated_sculk_sensor',
		'minecraft:sculk_catalyst',
		'minecraft:sea_lantern',
		'minecraft:soul_campfire'
	];
	
	for(const colour of global.dyeColours) {
		silkTouchBlocks.push(`minecraft:${colour}_stained_glass`);
		silkTouchBlocks.push(`minecraft:${colour}_stained_glass_pane`);
	}
	
	for(const coral of global.corals) {
		silkTouchBlocks.push(`minecraft:${coral}_coral_block`);
	}
	
	for(const block of silkTouchBlocks) {
		let lootTable = event.getBlockTable(block);
		
		if(lootTable != null) {
			lootTable
				.clear()
				.createPool()
				.addEntry(LootEntry.of(block));
		}
	}
	
	const shearableBlocks = [
		'minecraft:turtle_egg'
	];
	
	for(const coral of global.corals) {
		shearableBlocks.push(`minecraft:${coral}_coral`);
		shearableBlocks.push(`minecraft:${coral}_coral_fan`);
	}
	
	for(const block of shearableBlocks) {
		let lootTable = event.getBlockTable(block);
		
		if(lootTable != null) {
			lootTable
				.clear()
				.createPool()
				.addEntry(
					LootEntry
						.of(block)
						.matchTool(ItemFilter.tag('c:tools/shear'))
				);
		}
	}
});