ServerEvents.recipes(event => {
	for(const exposedBlock of Ingredient.of('#kubejs:blocks/exposed_copper').itemIds) {
		let baseBlock = exposedBlock.replace('exposed_', '');
		
		if(baseBlock == 'minecraft:copper') {
			baseBlock = 'minecraft:copper_block';
		}

		let wheatheredBlock = exposedBlock.replace('exposed', 'weathered');
		let oxidizedBlock = exposedBlock.replace('exposed', 'oxidized');
		
		CreateSplashingRecipe.custom(event, baseBlock, exposedBlock);
		CreateSplashingRecipe.custom(event, exposedBlock, wheatheredBlock);
		CreateSplashingRecipe.custom(event, wheatheredBlock, oxidizedBlock);
	}
	
	[
		'slabs',
		'stairs',
		'doors',
		'trapdoors',
		'bulbs'
	].forEach(blockType => {
		for(const exposedBlock of Ingredient.of(`#kubejs:${blockType}/exposed_copper`).itemIds) {
			let baseBlock = exposedBlock.replace('exposed_', '');
			let wheatheredBlock = exposedBlock.replace('exposed', 'weathered');
			let oxidizedBlock = exposedBlock.replace('exposed', 'oxidized');
			
			CreateSplashingRecipe.custom(event, baseBlock, exposedBlock);
			CreateSplashingRecipe.custom(event, exposedBlock, wheatheredBlock);
			CreateSplashingRecipe.custom(event, wheatheredBlock, oxidizedBlock);
		}
	});
});