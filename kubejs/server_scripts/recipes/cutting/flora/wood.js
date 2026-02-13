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
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_door`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_fence`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_pressure_plate`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_fence_gate`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_button`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('MC', (material) => `${material}_sign`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_hanging_sign`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_trapdoor`, 1),
		global.cutting.createBlockType('SP', (material) => `sign_post_${material}`, 1)
	];
	
	for(const wood of woodTypes) {
		let rawPair = global.cutting.createRawPair(
			global.id.MC(`${wood}_planks`),
			global.tag.MC(`${wood}_logs`), logValue
		);
		
		for(const blockType of blockTypes) {
			let result = global.id[blockType.mod](blockType.nameFormat(wood));
			global.cutting.addRawCuttingRecipe(event, rawPair, result, blockType.value);
		}
	}
	
	global.cutting.addCuttingRecipe(event, global.tag.MC('oak_logs'), global.id.MC('ladder'), 6);
	global.cutting.addCuttingRecipe(event, global.id.MC('oak_planks'), global.id.MC('ladder'), 1);
	woodTypes.pop();
	
	const woodWorksLadder = global.cutting.createBlockType('WW', (material) => `${material}_ladder`, 1);
	
	for(const wood of woodTypes) {
		let rawPair = global.cutting.createRawPair(
			global.id.MC(`${wood}_planks`),
			global.tag.MC(`${wood}_logs`), logValue
		);
		
		let result = global.id[woodWorksLadder.mod](woodWorksLadder.nameFormat(wood));
		global.cutting.addRawCuttingRecipe(event, rawPair, result, woodWorksLadder.value);
	}
	
	woodTypes.push('oak');
	
	for(const wood of woodTypes) {		
		global.cutting.addConversionRecipes(event, global.id.MC(`${wood}_planks`), [global.id.WW(`${wood}_boards`)]);
		
		global.cutting.addCuttingRecipe(event, global.tag.MC(`${wood}_logs`), global.id.MC(`${wood}_planks`), logValue);
		global.cutting.addCuttingRecipe(event, global.tag.MC(`${wood}_logs`), global.id.WW(`${wood}_boards`), logValue);
		
		event.shapeless(
			Item.of(global.id.MC(`${wood}_planks`), manualLogValue),
			[global.tag.MC(`${wood}_logs`)]
		);
	}
});