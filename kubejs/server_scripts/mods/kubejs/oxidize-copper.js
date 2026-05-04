ServerEvents.recipes(event => {
	potato.recipes.applyEvent(event);
	
	for(const exposedBlock of Ingredient.of('#kubejs:blocks/exposed_copper').itemIds) {
		let baseBlock = exposedBlock.replace('exposed_', '');
		
		if(baseBlock == 'minecraft:copper') {
			baseBlock = 'minecraft:copper_block';
		}

		let wheatheredBlock = exposedBlock.replace('exposed', 'weathered');
		let oxidizedBlock = exposedBlock.replace('exposed', 'oxidized');
		
		potato.event.create_splashing(baseBlock, [exposedBlock]);
		potato.event.create_splashing(exposedBlock, [wheatheredBlock]);
		potato.event.create_splashing(wheatheredBlock, [oxidizedBlock]);
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
			
			potato.event.create_splashing(baseBlock, [exposedBlock]);
			potato.event.create_splashing(exposedBlock, [wheatheredBlock]);
			potato.event.create_splashing(wheatheredBlock, [oxidizedBlock]);
		}
	});
});