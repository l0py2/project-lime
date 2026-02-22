//priority: 9

ServerEvents.recipes(event => {
	const woodTypes = [
		'crimson',
		'warped'
	];

	global.cutting.flora.woodRecipes(
		event,
		'stems',
		woodTypes,
		[
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_door`, global.cutting.values.door),
			global.cutting.createBlockType('MC', (material) => `${material}_fence`, global.cutting.values.wall),
			global.cutting.createBlockType('MC', (material) => `${material}_pressure_plate`),
			global.cutting.createBlockType('MC', (material) => `${material}_fence_gate`, global.cutting.values.wall),
			global.cutting.createBlockType('MC', (material) => `${material}_button`),
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('MC', (material) => `${material}_sign`, global.cutting.values.sign),
			global.cutting.createBlockType('MC', (material) => `${material}_hanging_sign`, global.cutting.values.sign),
			global.cutting.createBlockType('MC', (material) => `${material}_trapdoor`, global.cutting.values.trapdoor),
			global.cutting.createBlockType('WW', (material) => `${material}_ladder`, global.cutting.values.ladder),
			global.cutting.createBlockType('SP', (material) => `sign_post_${material}`, global.cutting.values.sign),
			global.cutting.createBlockType('SS', (material) => `item_shelf_${material}`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
			global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
		]
	);
	
	for(const wood of woodTypes) {
		global.cutting.addConversionRecipes(
			event,
			global.id.MC(`${wood}_planks`),
			[
				global.id.WW(`${wood}_boards`)
			]
		);
		
		global.cutting.addConversionRecipes(
			event,
			global.id.MC(`${wood}_stem`),
			[
				global.id.MC(`${wood}_hyphae`),
				global.id.MC(`stripped_${wood}_stem`),
				global.id.MC(`stripped_${wood}_hyphae`)
			]
		);
	}
});