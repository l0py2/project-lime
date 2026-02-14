//priority: 8

ServerEvents.recipes(event => {
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
	
	let blockTypes = [
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
	
	global.cutting.flora.woodRecipes(event, 'logs', woodTypes, blockTypes);
	
	global.cutting.addCuttingRecipe(event, global.tag.MC('oak_logs'), global.id.MC('ladder'), 6);
	global.cutting.addCuttingRecipe(event, global.id.MC('oak_planks'), global.id.MC('ladder'), 1);
	woodTypes.pop();
	blockTypes = [
		global.cutting.createBlockType('WW', (material) => `${material}_ladder`, 1)
	];
	global.cutting.flora.woodRecipes(event, 'logs', woodTypes, blockTypes);
	woodTypes.push('oak');
	
	global.cutting.flora.woodRawRecipes(event, 'logs', woodTypes);
	
	for(const wood of woodTypes) {
		global.cutting.addConversionRecipes(event, global.id.MC(`${wood}_planks`), [global.id.WW(`${wood}_boards`)]);
	}
});