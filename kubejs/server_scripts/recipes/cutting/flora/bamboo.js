//priority: 8

ServerEvents.recipes(event => {
	const woodTypes = [
		'bamboo'
	];
	
	const types = [
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
		global.cutting.createBlockType('MC', (material) => `${material}_mosaic`, 1),
		global.cutting.createBlockType('SP', (material) => `sign_post_${material}`, 1),
		global.cutting.createBlockType('SS', (material) => `item_shelf_${material}`, 2)
	];
	
	global.cutting.flora.woodRecipes(event, 'blocks', woodTypes, types);
	global.cutting.flora.woodRawRecipes(event, 'blocks', woodTypes);
});