ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('SP', 'checker_block', 'checker')],
		[
			global.cutting.createBlockType('SP', (material) => `${material}_slab`, global.cutting.values.slab)
		]
	);
});