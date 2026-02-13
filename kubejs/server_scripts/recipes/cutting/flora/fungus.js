//priority: 8

ServerEvents.recipes(event => {
	const logValue = 6; // Cutting planks crafting recipe
	const manualLogValue = 4; // Default planks crafting recipe

	const fungusTypes = [
		'crimson',
		'warped'
	];
	
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
		global.cutting.createBlockType('WW', (material) => `${material}_ladder`, 1),
		global.cutting.createBlockType('SP', (material) => `sign_post_${material}`, 1)
	];
	
	for(const fungus of fungusTypes) {
		let rawPair = global.cutting.createRawPair(
			global.id.MC(`${fungus}_planks`),
			global.tag.MC(`${fungus}_stems`), logValue
		);
		
		for(const blockType of blockTypes) {
			let result = global.id[blockType.mod](blockType.nameFormat(fungus));
			global.cutting.addRawCuttingRecipe(event, rawPair, result, blockType.value);
		}
		
		global.cutting.addConversionRecipes(event, global.id.MC(`${fungus}_planks`), [global.id.WW(`${fungus}_boards`)]);
		
		global.cutting.addCuttingRecipe(event, global.tag.MC(`${fungus}_stems`), global.id.MC(`${fungus}_planks`), logValue);
		global.cutting.addCuttingRecipe(event, global.tag.MC(`${fungus}_stems`), global.id.WW(`${fungus}_boards`), logValue);
		
		event.shapeless(
			Item.of(global.id.MC(`${fungus}_planks`), manualLogValue),
			[global.tag.MC(`${fungus}_stems`)]
		);
	}
});