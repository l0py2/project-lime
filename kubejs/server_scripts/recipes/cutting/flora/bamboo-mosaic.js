//priority: 8

ServerEvents.recipes(event => {
	const blocks = [
		global.cutting.createBlock('MC', 'bamboo_mosaic')
	];
	
	const types = [
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2)
	];
	
	global.cutting.addBaseTypeRecipes(event, blocks, types);
});