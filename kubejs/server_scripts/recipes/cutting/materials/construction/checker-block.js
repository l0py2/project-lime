//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('SP', 'checker_block', 'checker')
	];
	
	const types = [
		global.cutting.createBlockType('SP', (material) => `${material}_slab`, 2)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
});