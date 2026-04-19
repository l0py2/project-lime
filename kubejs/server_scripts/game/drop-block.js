LootJS.lootTables(event => {
	// Removes the need of silk touch for blocks like glass
	const lootTableIds = event.getLootTableIds(/.*blocks\/.*/)
		.map(resource => resource.toString());
	
	for(const lootTableId of lootTableIds) {
		let lootTable = event.getLootTable(lootTableId);
		
		if(lootTable.getLootType() == LootType.BLOCK) {
			let blockName = lootTableId.replace('blocks/', '');
			let blockExists = Item.exists(blockName);
			
			if(blockExists) {
				let entries = lootTable
					.firstPool()
					.getEntries();
				
				lootTable
					.clear()
					.createPool(pool => {
						for(const entry of entries) {
							pool.addEntry(entry);
						}
					});
			}
		}
	}
});