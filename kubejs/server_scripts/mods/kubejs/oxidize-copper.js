ServerEvents.recipes(event => {
	for(const exposedBlock of Ingredient.of('#kubejs:blocks/exposed_copper').itemIds) {
		let baseBlock = exposedBlock.replace('exposed_', '');
		
		if(baseBlock == 'minecraft:copper') {
			baseBlock = 'minecraft:copper_block';
		}

		let wheatheredBlock = exposedBlock.replace('exposed', 'weathered');
		let oxidizedBlock = exposedBlock.replace('exposed', 'oxidized');
		
		event.recipes.create.splashing(exposedBlock, baseBlock);
		event.recipes.create.splashing(wheatheredBlock, exposedBlock);
		event.recipes.create.splashing(oxidizedBlock, wheatheredBlock);
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
			
			event.recipes.create.splashing(exposedBlock, baseBlock);
			event.recipes.create.splashing(wheatheredBlock, exposedBlock);
			event.recipes.create.splashing(oxidizedBlock, wheatheredBlock);
		}
	});
});