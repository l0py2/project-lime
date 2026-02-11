//priority: 8

ServerEvents.recipes(event => {
	const logValue = 6; // Cutting planks crafting recipe
	const manualLogValue = 4; // Default planks crafting recipe

	const fungusTypes = [
		'crimson',
		'warped'
	];
	
	const blockTypes = [
		global.cutting.createBlockType('MC', 'stairs', 1),
		global.cutting.createBlockType('MC', 'door', 1),
		global.cutting.createBlockType('MC', 'fence', 1),
		global.cutting.createBlockType('MC', 'pressure_plate', 1),
		global.cutting.createBlockType('MC', 'fence_gate', 1),
		global.cutting.createBlockType('MC', 'button', 1),
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'sign', 1),
		global.cutting.createBlockType('MC', 'hanging_sign', 1),
		global.cutting.createBlockType('MC', 'trapdoor', 1),
		global.cutting.createBlockType('WW', 'ladder', 1)
	];
	
	for(const fungus of fungusTypes) {
		let rawPair = global.cutting.createRawPair(
			global.id.MC(`${fungus}_planks`),
			global.tag.MC(`${fungus}_stems`), logValue
		);
		
		for(const blockType of blockTypes) {
			let result = global.id[blockType.mod](`${fungus}_${blockType.name}`);
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