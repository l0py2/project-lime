//priority: 9

ServerEvents.recipes(event => {
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'dripstone_block', 'dripstone')],
		[
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
});