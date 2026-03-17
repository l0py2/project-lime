ServerEvents.recipes(event => {
	const blockTypes = [
		'stone',
		'mossy_stone',
		'andesite',
		'diorite',
		'granite',
		'crimsite',
		'asurine',
		'ochrum',
		'veridium',
		'prismarine',
		'dark_prismarine',
		'phosphorite',
		'shale',
		'jasper',
		'myalite',
		'scoria',
		'scorchia'
	];
	
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
		
		if(Ingredient.of(slabTag).itemIds.length > 0) {
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
		}
		
		let stairTag = global.tag.KJ(`stair_types/${blockType}`);
		
		if(Ingredient.of(stairTag).itemIds.length > 0) {
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
		}
		
		let wallTag = global.tag.KJ(`wall_types/${blockType}`);
		
		if(Ingredient.of(wallTag).itemIds.length > 0) {
			for(const wall of Ingredient.of(wallTag).itemIds) {
				event.remove({
					type: global.id.MC('stonecutting'),
					output: wall
				});
				
				event.remove({
					type: global.id.MC('crafting_shaped'),
					output: wall
				});
				
				event.stonecutting(wall, blockTag);
				event.stonecutting(wall, wallTag);
			}
		}
	}
});