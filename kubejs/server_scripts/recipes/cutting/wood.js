//priority: 8

ServerEvents.recipes(event => {
	const logValue = 6; // Cutting planks crafting recipe
	const manualLogValue = 4; // Default planks crafting recipe

	const woodTypes = [
		'spruce',
		'mangrove',
		'birch',
		'acacia',
		'dark_oak',
		'jungle',
		'cherry'
	];
	woodTypes.push('oak');
	
	const blockTypes = [
		global.cutting.createBlockType('MC', 'stairs', 1),
		global.cutting.createBlockType('MC', 'door', 1),
		global.cutting.createBlockType('MC', 'fence', 1),
		global.cutting.createBlockType('MC', 'pressure_plate', 1),
		global.cutting.createBlockType('MC', 'fence_gate', 1),
		global.cutting.createBlockType('MC', 'button', 1),
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'sign', 1),
		global.cutting.createBlockType('MC', 'trapdoor', 1)
	];
	
	for(const wood of woodTypes) {
		let rawPair = global.cutting.createRawPair(
			global.id.MC(`${wood}_planks`),
			global.tag.MC(`${wood}_logs`), logValue
		);
		
		for(const blockType of blockTypes) {
			let result = global.id[blockType.mod](`${wood}_${blockType.name}`);
			global.cutting.addRawCuttingRecipe(event, rawPair, result, blockType.value);
		}
	}
	
	global.cutting.addCuttingRecipe(event, global.tag.MC('oak_logs'), global.id.MC('ladder'), 6);
	global.cutting.addCuttingRecipe(event, global.id.MC('oak_planks'), global.id.MC('ladder'), 1);
	woodTypes.pop();
	
	const woodWorksLadder = global.cutting.createBlockType('WW', 'ladder', 1);
	
	for(const wood of woodTypes) {
		let rawPair = global.cutting.createRawPair(
			global.id.MC(`${wood}_planks`),
			global.tag.MC(`${wood}_logs`), logValue
		);
		
		let result = global.id[woodWorksLadder.mod](`${wood}_${woodWorksLadder.name}`);
		global.cutting.addRawCuttingRecipe(event, rawPair, result, woodWorksLadder.value);
	}
	
	woodTypes.push('oak');
	
	for(const wood of woodTypes) {
		let woodBlocks = [
			global.id.MC(`${wood}_planks`),
			global.id.WW(`${wood}_boards`)
		];
		
		global.cutting.addCuttingConversionRecipes(event, woodBlocks);
		
		global.cutting.addCuttingRecipe(event, global.tag.MC(`${wood}_logs`), global.id.MC(`${wood}_planks`), logValue);
		global.cutting.addCuttingRecipe(event, global.tag.MC(`${wood}_logs`), global.id.WW(`${wood}_boards`), logValue);
		
		event.shapeless(
			Item.of(global.id.MC(`${wood}_planks`), manualLogValue),
			[global.tag.MC(`${wood}_logs`)]
		);
	}
});