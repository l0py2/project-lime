//priority: 8

ServerEvents.recipes(event => {
	const blocks = [
		global.cutting.createBlock('SP', 'fine_wood')
	];
	
	const types = [
		global.cutting.createBlockType('SP', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('SP', (material) => `${material}_stairs`, 1)
	];
	
	global.cutting.addBaseTypeRecipes(event, blocks, types);
});