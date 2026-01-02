//priority: 8

ServerEvents.recipes(event => {
	const logValue = 6; // Cutting planks crafting recipe
	const manualLogValue = 4; // Default planks crafting recipe
	
	function createWoodBlock(prefix, type, value) {
		return {
			prefix: prefix,
			type: type,
			value: value // Result count by one plank
		};
	}

	function addWoodBlockRecipes(woodBlock, woodType, logType) {
		let resultBlock = `${woodBlock.prefix}${woodType}_${woodBlock.type}`;

		event.remove({ output: resultBlock });

		if(Math.trunc(woodBlock.value) >= 1) {
			event.stonecutting(
				Item.of(resultBlock, Math.trunc(woodBlock.value)),
				global.id.MC(`${woodType}_planks`)
			);
		}

		event.stonecutting(
			Item.of(resultBlock, Math.trunc(woodBlock.value * logValue)),
			global.tag.MC(`${woodType}_${logType}`)
		);
	}

	const woodTypes = [
		'spruce',
		'mangrove',
		'birch',
		'acacia',
		'dark_oak',
		'jungle',
		'cherry'
	];
	woodTypes.push('oak');

	const stemTypes = [
		'crimson',
		'warped'
	];

	const woodBlocks = [
		createWoodBlock(global.id.MC(''), 'stairs', 1),
		createWoodBlock(global.id.MC(''), 'door', 0.5),
		createWoodBlock(global.id.MC(''), 'fence', 1),
		createWoodBlock(global.id.MC(''), 'pressure_plate', 0.5),
		createWoodBlock(global.id.WW(''), 'boards', 1),
		createWoodBlock(global.id.MC(''), 'fence_gate', 0.25),
		createWoodBlock(global.id.MC(''), 'button', 1),
		createWoodBlock(global.id.MC(''), 'slab', 2),
		createWoodBlock(global.id.MC(''), 'sign', 0.5),
		createWoodBlock(global.id.MC(''), 'planks', 1),
		createWoodBlock(global.id.MC(''), 'trapdoor', 1)
	];

	const ladder = createWoodBlock(global.id.WW(''), 'ladder', 1);

	const bambooBlocks = [
		createWoodBlock(global.id.MC(''), 'stairs', 1),
		createWoodBlock(global.id.MC(''), 'mosaic_stairs', 1),
		createWoodBlock(global.id.MC(''), 'door', 0.5),
		createWoodBlock(global.id.MC(''), 'fence', 1),
		createWoodBlock(global.id.MC(''), 'pressure_plate', 0.5),
		createWoodBlock(global.id.MC(''), 'fence_gate', 0.25),
		createWoodBlock(global.id.MC(''), 'button', 1),
		createWoodBlock(global.id.MC(''), 'slab', 2),
		createWoodBlock(global.id.MC(''), 'mosaic_slab', 2),
		createWoodBlock(global.id.MC(''), 'sign', 0.5),
		createWoodBlock(global.id.MC(''), 'planks', 1),
		createWoodBlock(global.id.MC(''), 'trapdoor', 1),
		createWoodBlock(global.id.MC(''), 'mosaic', 1)
	];

	for(const woodType of woodTypes) {
		for(const woodBlock of woodBlocks) {
			addWoodBlockRecipes(woodBlock, woodType, 'logs');
		}
	}

	for(const stemType of stemTypes) {
		for(const woodBlock of woodBlocks) {
			addWoodBlockRecipes(woodBlock, stemType, 'stems');
		}
	}

	for(const bambooBlock of bambooBlocks) {
		addWoodBlockRecipes(bambooBlock, 'bamboo', 'blocks');
	}

	// All ladder types except oak
	woodTypes.pop();
	
	event.remove({ output: global.id.MC('ladder') });
	event.stonecutting(global.id.MC('ladder'), global.id.MC('oak_planks'));
	event.stonecutting(Item.of(global.id.MC('ladder'), logValue), global.tag.MC('oak_logs'));

	for(const woodType of woodTypes) {
		addWoodBlockRecipes(ladder, woodType, 'logs');
	}

	for(const stemType of stemTypes) {
		addWoodBlockRecipes(ladder, stemType, 'stems');
	}

	addWoodBlockRecipes(ladder, 'bamboo', 'blocks');
	
	woodTypes.push('oak');
	
	for(const woodType of woodTypes) {
		event.shapeless(
			Item.of(global.id.MC(`${woodType}_planks`), manualLogValue),
			[global.tag.MC(`${woodType}_logs`)]
		);
	}
	
	for(const stemType of stemTypes) {
		event.shapeless(
			Item.of(global.id.MC(`${stemType}_planks`), manualLogValue),
			[global.tag.MC(`${stemType}_stems`)]
		);
	}
	
	event.shapeless(
		Item.of(global.id.MC(`bamboo_planks`), manualLogValue),
		[global.tag.MC('bamboo_blocks')]
	);
});