//priority: 8

ServerEvents.recipes(event => {
	const logValue = 6;
	const manualLogValue = 4;
	
	const bambooTypes = [
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
	
	const bambooMosaicTypes = [
		global.cutting.createBlockType('MC', 'stairs', 1),
		global.cutting.createBlockType('MC', 'slab', 2)
	];
	
	let rawPair = global.cutting.createRawPair(
		global.id.MC('bamboo_planks'),
		global.tag.MC('bamboo_blocks'), logValue
	);
		
	for(const blockType of bambooTypes) {
		let result = global.id[blockType.mod](`bamboo_${blockType.name}`);
		
		global.cutting.addRawCuttingRecipe(event, rawPair, result, blockType.value);
	}
	
	rawPair = global.cutting.createRawPair(
		global.id.MC('bamboo_mosaic'),
		global.tag.MC('bamboo_blocks'), logValue
	);
	
	for(const blockType of bambooMosaicTypes) {
		let result = global.id[blockType.mod](`bamboo_mosaic_${blockType.name}`);
		
		global.cutting.addRawCuttingRecipe(event, rawPair, result, blockType.value);
	}
	
	global.cutting.addConversionRecipes(event, global.id.MC('bamboo_planks'), [global.id.MC('bamboo_mosaic')]);
	
	global.cutting.addCuttingRecipe(event, global.tag.MC('bamboo_blocks'), global.id.MC('bamboo_planks'), logValue);
	global.cutting.addCuttingRecipe(event, global.tag.MC('bamboo_blocks'), global.id.MC('bamboo_mosaic'), logValue);
	
	event.shapeless(
		Item.of(global.id.MC(`bamboo_planks`), manualLogValue),
		[global.tag.MC('bamboo_blocks')]
	);
});