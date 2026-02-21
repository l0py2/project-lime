//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(event, global.id.MC('cobbled_deepslate'), [global.id.MC('deepslate')]);
	
	const stones = [
		global.cutting.createBlock('MC', 'deepslate')
	];
	
	global.cutting.addBaseVariantTypeRecipes(
		event, 
		stones, 
		[
			global.cutting.createBlockVariant('MC', (material) => `polished_${material}`),
			global.cutting.createBlockVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
			global.cutting.createBlockVariant('MC', (material) => `${material}_tiles`, (material) => `${material}_tile`)
		],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_wall`, global.cutting.values.wall)
		]
	);
	
	global.cutting.addBaseVariantRecipes(
		event,
		stones,
		[
			global.cutting.createBlockVariant('MC', (material) => `chiseled_${material}`),
			global.cutting.createBlockVariant('MC', (material) => `cracked_${material}_bricks`),
			global.cutting.createBlockVariant('MC', (material) => `cracked_${material}_tiles`)
		]
	);
	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'deepslate')],
		[
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
});