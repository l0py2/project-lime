//priority: 8

ServerEvents.recipes(event => {
	const woodTypes = [
		'crimson',
		'warped'
	];
	
	const blockTypes = [
		global.cutting.createBlockType('MC', (material) => `${material}_stairs`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_door`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_fence`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_pressure_plate`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_fence_gate`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_button`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_slab`, 2),
		global.cutting.createBlockType('MC', (material) => `${material}_sign`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_hanging_sign`, 1),
		global.cutting.createBlockType('MC', (material) => `${material}_trapdoor`, 1),
		global.cutting.createBlockType('WW', (material) => `${material}_ladder`, 1),
		global.cutting.createBlockType('SP', (material) => `sign_post_${material}`, 1),
		global.cutting.createBlockType('SS', (material) => `item_shelf_${material}`, 2)
	];
	
	global.cutting.flora.woodRecipes(event, 'stems', woodTypes, blockTypes);
	global.cutting.flora.woodRawRecipes(event, 'stems', woodTypes);
	
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