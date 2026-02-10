//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('MC', 'smooth_stone')
	];
	
	const types = [
		global.cutting.createBlockType('MC', 'slab', 2)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
});