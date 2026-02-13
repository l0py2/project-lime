//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'cobblestone'),
		global.cutting.createBlock('MC', 'mossy_cobblestone'),
		global.cutting.createBlock('MC', 'cobbled_deepslate'),
		global.cutting.createBlock('MC', 'blackstone')
	];
	
	const types = [
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_wall`, 1)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
});