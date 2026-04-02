ServerEvents.recipes(event => {
	const blockTypes = [
		'glass',
		'framed_glass'
	];
	
	for(const colour of global.dyeColours) {
		blockTypes.push(`${colour}_stained_glass`);
		blockTypes.push(`${colour}_framed_glass`);
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
		
		let wallTag = global.tag.KJ(`wall_types/${blockType}`);
			
		for(const wall of Ingredient.of(wallTag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
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
	
	for(const blockType of blockTypes) {
		let wallTag = global.tag.KJ(`wall_types/${blockType}`);
		global.recipes.revertBlockVariant(event, Ingredient.of(wallTag).itemIds, 2, 'wall');
	}
});