//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('SP', 'stone_tile')
	];
	
	const types = [
		global.cutting.createBlockType('SP', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('SP', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('SP', (material) => `${material}_wall`, 1)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
});