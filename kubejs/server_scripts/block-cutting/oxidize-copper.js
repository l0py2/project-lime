ServerEvents.recipes(event => {
	for(const exposedBlock of Ingredient.of('#kubejs:blocks/exposed_copper').itemIds) {
		let baseBlock = exposedBlock.replace('exposed_', '');
		
		if(baseBlock == 'minecraft:copper') {
			baseBlock = 'minecraft:copper_block';
		}

		let wheatheredBlock = exposedBlock.replace('exposed', 'weathered');
		let oxidizedBlock = exposedBlock.replace('exposed', 'oxidized');
		
		CreateSplashingRecipe.custom(event, [Ingredient.of(baseBlock)], [Item.of(exposedBlock)]);
		CreateSplashingRecipe.custom(event, [Ingredient.of(exposedBlock)], [Item.of(wheatheredBlock)]);
		CreateSplashingRecipe.custom(event, [Ingredient.of(wheatheredBlock)], [Item.of(oxidizedBlock)]);
	}
});