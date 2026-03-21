ServerEvents.recipes(event => {
	const blockTypes = [
		'copper',
		'exposed_copper',
		'weathered_copper',
		'oxidized_copper',
		'waxed_copper',
		'waxed_exposed_copper',
		'waxed_weathered_copper',
		'waxed_oxidized_copper'
	];
	
	for(const blockType of blockTypes) {
		let blockTag = global.tag.KJ(`block_types/${blockType}`);
		
		for(const block of Ingredient.of(blockTag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
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
	}
});