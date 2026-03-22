ServerEvents.recipes(event => {
	const blockTypes = [
		'andesite',
		'asgharian',
		'ash_brick',
		'asphalt',
		'asurine',
		'basalt',
		'blackstone',
		'blue_nether_brick',
		'brick',
		'calcite',
		'checker',
		'crimsite',
		'dark_prismarine',
		'deepslate',
		'diorite',
		'dripstone',
		'dripstone',
		'end_stone',
		'granite',
		'jasper',
		'limestone',
		'midori',
		'mossy_asgharian',
		'mossy_stone',
		'mud',
		'myalite',
		'nether_brick',
		'netherrack',
		'ochrum',
		'permafrost',
		'phosphorite',
		'prismarine',
		'purpur',
		'quartz',
		'red_nether_brick',
		'red_sand',
		'sand',
		'scorchia',
		'scoria',
		'shale',
		'soul_sand',
		'stone',
		'terracotta',
		'tuff',
		'veridium'
	];
	
	for(const colour of global.dyeColours) {
		blockTypes.push(`${colour}_terracotta`);
	}
	
	for(const blockType of blockTypes) {
		let blockTag = global.tag.KJ(`block_types/${blockType}`);
		
		for(const block of Ingredient.of(blockTag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
				output: block
			});
			
			event.remove({
				type: global.id.MC('smelting'),
				output: block
			});
			
			event.remove({
				type: global.id.MC('blasting'),
				output: block
			});
			
			event.remove({
				type: global.id.MC('crafting_shaped'),
				input: blockTag,
				output: block
			});
			
			event.remove({
				mod: 'stonezone',
				output: block
			});
			
			event.stonecutting(block, blockTag);
		}
		
		let slabTag = global.tag.KJ(`slab_types/${blockType}`);
		
		for(const slab of Ingredient.of(slabTag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
				output: slab
			});
				
			event.remove({
				type: global.id.MC('crafting_shaped'),
				output: slab
			});
				
			event.stonecutting(Item.of(slab, 2), blockTag);
			event.stonecutting(slab, slabTag);
		}
		
		let stairTag = global.tag.KJ(`stair_types/${blockType}`);
		
		for(const stair of Ingredient.of(stairTag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
				output: stair
			});
				
			event.remove({
				type: global.id.MC('crafting_shaped'),
				output: stair
			});
				
			event.stonecutting(stair, blockTag);
			event.stonecutting(stair, stairTag);
		}
		
		let wallTag = global.tag.KJ(`wall_types/${blockType}`);
		
		for(const wall of Ingredient.of(wallTag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
				output: wall
			});
				
			event.remove({
				type: global.id.MC('crafting_shaped'),
				output: wall
			});
				
			event.stonecutting(Item.of(wall, 2), blockTag);
			event.stonecutting(wall, wallTag);
		}	
	}
});