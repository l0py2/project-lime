//priority: 8

ServerEvents.recipes(event => {
	// Oak is excluded to be handled separately for being the "default" wood
	const woodTypes = [
		'spruce',
		'mangrove',
		'birch',
		'acacia',
		'dark_oak',
		'jungle',
		'cherry'
	];
	
	let blockTypes = [
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
	];
	
	global.cutting.flora.woodRecipes(event, 'logs', woodTypes, blockTypes);
	global.cutting.flora.woodRawRecipes(event, 'logs', woodTypes);
	
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
			global.id.MC(`${wood}_log`),
			[
				global.id.MC(`${wood}_wood`),
				global.id.MC(`stripped_${wood}_log`),
				global.id.MC(`stripped_${wood}_wood`)
			]
		);
	}
});