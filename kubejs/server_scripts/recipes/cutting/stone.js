ServerEvents.recipes(event => {
	const tags = [
		global.tag.KJ('stone_types/stone'),
		global.tag.KJ('stone_types/mossy_stone')
	];
	
	for(const tag of tags) {
		for(const stone of Ingredient.of(tag).itemIds) {
			event.remove({
				type: global.id.MC('stonecutting'),
				output: stone
			});
			
			event.remove({
				type: global.id.MC('smelting'),
				output: stone
			});
			
			event.remove({
				type: global.id.MC('blasting'),
				output: stone
			});
			
			event.stonecutting(
				stone,
				tag
			);
		}
	}
});