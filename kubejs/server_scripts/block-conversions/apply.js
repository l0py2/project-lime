//priority: 48

ServerEvents.tags('item', event => {
	for(const [tag, item] of global.blockConversions.tags) {
		event.add(tag, item);
	}
});

ServerEvents.recipes(event => {
	for(const blockType of global.blockConversions.types) {
		let blockTag = global.tag.KJ(`block_types/${blockType}`);
			
		for(const block of Ingredient.of(blockTag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
				output: block
			});
			
			event.remove({
				type: global.id.CR('cutting'),
				input: blockTag,
				output: block
			});
			
			event.remove({
				type: global.id.MC('smelting'),
				input: blockTag,
				output: block
			});
				
			event.remove({
				type: global.id.MC('blasting'),
				input: blockTag,
				output: block
			});
				
			event.remove({
				type: global.id.MC('crafting_shaped'),
				input: blockTag,
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
				type: global.id.CR('cutting'),
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
				type: global.id.CR('cutting'),
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
				type: global.id.CR('cutting'),
				output: wall
			});
				
			event.remove({
				type: global.id.MC('smelting'),
				output: wall
			});
			
			event.remove({
				type: global.id.MC('blasting'),
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
	
	for(const blockType of global.blockConversions.types) {
		let slabTag = global.tag.KJ(`slab_types/${blockType}`);
		global.recipes.revertBlockVariant(event, Ingredient.of(slabTag).itemIds, 2, 'slab');
		
		let stairTag = global.tag.KJ(`stair_types/${blockType}`);
		global.recipes.revertBlockVariant(event, Ingredient.of(stairTag).itemIds, 1, 'stairs');
		
		let wallTag = global.tag.KJ(`wall_types/${blockType}`);
		global.recipes.revertBlockVariant(event, Ingredient.of(wallTag).itemIds, 2, 'wall');
	}
});