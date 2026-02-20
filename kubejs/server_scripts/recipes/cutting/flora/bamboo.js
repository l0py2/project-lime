//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('bamboo_block'),
		[
			global.id.MC('stripped_bamboo_block')
		]
	);
	
	// Bamboo
	const woodTypes = [
		'bamboo'
	];
	
	const types = [
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
		global.cutting.createBlockType('MC', (material) => `${material}_mosaic`),
		global.cutting.createBlockType('SP', (material) => `sign_post_${material}`, global.cutting.values.sign),
		global.cutting.createBlockType('SS', (material) => `item_shelf_${material}`, global.cutting.values.slab),
		global.cutting.createBlockType('HC', (material) => `${material}_pillar_trim`, global.cutting.values.slab),
		global.cutting.createBlockType('HC', (material) => `${material}_corner_trim`)
	];
	
	global.cutting.flora.woodRecipes(event, 'blocks', woodTypes, types);
	global.cutting.flora.woodRawRecipes(event, 'blocks', woodTypes);
	
	event.shaped(
		global.id.MC('bamboo_block'),
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{ A: global.id.MC('bamboo') }
	);
	
	// Bamboo mosaic	
	global.cutting.addBaseTypeRecipes(
		event,
		[global.cutting.createBlock('MC', 'bamboo_mosaic')],
		[
			global.cutting.createBlockType('MC', (material) => `${material}_stairs`, global.cutting.values.stairs),
			global.cutting.createBlockType('MC', (material) => `${material}_slab`, global.cutting.values.slab)
		]
	);
});