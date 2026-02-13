//priority: 8

ServerEvents.recipes(event => {
	const stones = [
		global.cutting.createBlock('SP', 'blackstone_tile')
	];
	
	const types = [
		global.cutting.createBlockType('SP', 'slab', 2),
		global.cutting.createBlockType('SP', 'stairs', 1),
		global.cutting.createBlockType('SP', 'wall', 1)
	];
	
	global.cutting.addBaseTypeRecipes(event, stones, types);
});