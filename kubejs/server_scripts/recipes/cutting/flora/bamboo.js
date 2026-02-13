//priority: 8

ServerEvents.recipes(event => {
	const logValue = 6;
	const manualLogValue = 4;
	
	const bambooTypes = [
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
	
	const bambooMosaicTypes = [
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2)
	];
	
	let rawPair = global.cutting.createRawPair(
		global.id.MC('bamboo_planks'),
		global.tag.MC('bamboo_blocks'), logValue
	);
		
	for(const blockType of bambooTypes) {
		let result = global.id[blockType.mod](blockType.nameFormat('bamboo'));
		
		global.cutting.addRawCuttingRecipe(event, rawPair, result, blockType.value);
	}
	
	rawPair = global.cutting.createRawPair(
		global.id.MC('bamboo_mosaic'),
		global.tag.MC('bamboo_blocks'), logValue
	);
	
	for(const blockType of bambooMosaicTypes) {
		let result = global.id[blockType.mod](blockType.nameFormat('bamboo_mosaic'));
		
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