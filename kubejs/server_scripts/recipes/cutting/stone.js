//priority: 8

ServerEvents.recipes(event => {
	function createBaseStone(mod, name, material) {
		return {
			mod: mod,
			name: name,
			material: material == undefined ? name : material
		};
	}

	function createStoneVariant(mod, blockFormat, materialFormat) {
		return {
			mod: mod,
			blockFormat: blockFormat,
			materialFormat: materialFormat == undefined ? blockFormat : materialFormat
		};
	}

	function createStoneType(mod, name, value) {
		return {
			mod: mod,
			name: name,
			value: value
		};
	}

	function addStoneListConversionRecipes(stones) {
		for(let i = 0; i < stones.length; i++) {
			event.remove({ output: stones[i] });

			// Blocks before the current
			for(let j = 0; j < i; j++) {
				event.stonecutting(
					stones[i],
					stones[j]
				);
			}

			// Blocks after ther current
			for(let j = i + 1; j < stones.length; j++) {
				event.stonecutting(
					stones[i],
					stones[j]
				);
			}
		}
	}

	function addStoneGroupConversionRecipes(baseStones, stoneVariants) {
		for(const baseStone of baseStones) {
			let stones = [];

			stones.push(global.id[baseStone.mod](baseStone.name));

			for(const stoneVariant of stoneVariants) {
				stones.push(global.id[stoneVariant.mod](stoneVariant.blockFormat(baseStone.material)));
			}

			addStoneListConversionRecipes(stones);
		}
	}

	function addStoneRecipes(stones, stoneTypes) {
		for(const stone of stones) {
			let baseBlock = global.id[stone.mod](stone.name);
			let material = stone.material;

			for(const stoneType of stoneTypes) {
				let resultBlock = global.id[stoneType.mod](`${material}_${stoneType.name}`);

				event.remove({ output: resultBlock });

				event.stonecutting(
					Item.of(resultBlock, stoneType.value),
					baseBlock
				);
			}
		}
	}

	function addStoneGroupRecipes(stones, stoneVariants, stoneTypes) {
		for(const stone of stones) {
			for(const stoneVariant of stoneVariants) {
				let baseBlock = global.id[stoneVariant.mod](stoneVariant.blockFormat(stone.material));
				let material = stoneVariant.materialFormat(stone.material);

				for(const stoneType of stoneTypes) {
					let resultBlock = global.id[stoneType.mod](`${material}_${stoneType.name}`);

					event.remove({ output: resultBlock });

					event.stonecutting(
						Item.of(resultBlock, stoneType.value),
						baseBlock
					);
				}
			}
		}
	}

	const vanillaStones = [
		createBaseStone('MC', 'granite'),
		createBaseStone('MC', 'diorite'),
		createBaseStone('MC', 'andesite')
	];

	const vanillaCobbleStones = [
		createBaseStone('MC', 'cobblestone'),
		createBaseStone('MC', 'mossy_cobblestone'),
		createBaseStone('MC', 'cobbled_deepslate'),
		createBaseStone('MC', 'blackstone')
	];
	
	const vanillaSimpleStones = [
		createBaseStone('MC', 'stone')
	];
	
	const vanillaDeepStones = [
		createBaseStone('MC', 'deepslate')
	];
	
	const vanillaBlackStones = [
		createBaseStone('MC', 'blackstone')
	]

	const createStones = [
		createBaseStone('MC', 'granite'),
		createBaseStone('MC', 'diorite'),
		createBaseStone('MC', 'andesite'),
		createBaseStone('MC', 'calcite'),
		createBaseStone('MC', 'dripstone_block', 'dripstone'),
		createBaseStone('MC', 'deepslate'),
		createBaseStone('MC', 'tuff'),
		createBaseStone('CR', 'asurine'),
		createBaseStone('CR', 'crimsite'),
		createBaseStone('CR', 'limestone'),
		createBaseStone('CR', 'ochrum'),
		createBaseStone('CR', 'scoria'),
		createBaseStone('CR', 'scorchia'),
		createBaseStone('CR', 'veridium')
	];

	const vanillaPolishedVaraints = [
		createStoneVariant('MC', (material) => `polished_${material}`)
	];
	
	const vanillaSimpleStoneVariants = [
		createStoneVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		createStoneVariant('MC', (material) => `mossy_${material}_bricks`, (material) => `mossy_${material}_brick`)
	];
	
	const vanillaFullSimpleStoneVariants = [
		createStoneVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		createStoneVariant('MC', (material) => `mossy_${material}_bricks`, (material) => `mossy_${material}_brick`),
		createStoneVariant('MC', (material) => `chiseled_${material}_bricks`, (material) => `chiseled_${material}_brick`),
		createStoneVariant('MC', (material) => `smooth_${material}`)
	];

	const vanillaDeepStoneVariants = [
		createStoneVariant('MC', (material) => `polished_${material}`),
		createStoneVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		createStoneVariant('MC', (material) => `${material}_tiles`, (material) => `${material}_tile`)
	];

	const vanillaFullDeepStoneVariants = [
		createStoneVariant('MC', (material) => `chiseled_${material}`),
		createStoneVariant('MC', (material) => `polished_${material}`),
		createStoneVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		createStoneVariant('MC', (material) => `cracked_${material}_bricks`, (material) => `cracked_${material}_brick`),
		createStoneVariant('MC', (material) => `${material}_tiles`),
		createStoneVariant('MC', (material) => `cracked_${material}_tiles`)
	];
	
	const vanillaBlackStoneVariants = [
		createStoneVariant('MC', (material) => `polished_${material}`),
		createStoneVariant('MC', (material) => `polished_${material}_bricks`, (material) => `polished_${material}_brick`)
	];
	
	const vanillaFullBlackStoneVariants = [
		createStoneVariant('MC', (material) => `polished_${material}`),
		createStoneVariant('MC', (material) => `polished_${material}_bricks`, (material) => `polished_${material}_brick`),
		createStoneVariant('MC', (material) => `cracked_polished_${material}_bricks`, (material) => `polished_${material}_brick`),
		createStoneVariant('MC', (material) => `chiseled_polished_${material}`),
	];

	const createStoneVariants = [
		createStoneVariant('CR', (material) => `cut_${material}`),
		createStoneVariant('CR', (material) => `polished_cut_${material}`),
		createStoneVariant('CR', (material) => `cut_${material}_bricks`, (material) => `cut_${material}_brick`),
		createStoneVariant('CR', (material) => `small_${material}_bricks`, (material) => `small_${material}_brick`)
	];

	const fullCreateStoneVariants = [
		createStoneVariant('CR', (material) => `layered_${material}`),
		createStoneVariant('CR', (material) => `cut_${material}`),
		createStoneVariant('CR', (material) => `polished_cut_${material}`),
		createStoneVariant('CR', (material) => `cut_${material}_bricks`, (material) => `cut_${material}_brick`),
		createStoneVariant('CR', (material) => `small_${material}_bricks`, (material) => `small_${material}_brick`),
		createStoneVariant('CR', (material) => `${material}_pillar`)
	];

	const vanillaStoneTypes = [
		createStoneType('MC', 'slab', 2),
		createStoneType('MC', 'stairs', 1),
		createStoneType('MC', 'wall', 1)
	];

	const incompleteVanillaStoneTypes = [
		createStoneType('MC', 'slab', 2),
		createStoneType('MC', 'stairs', 1)
	];

	const createStoneTypes = [
		createStoneType('CR', 'slab', 2),
		createStoneType('CR', 'stairs', 1),
		createStoneType('CR', 'wall', 1)
	];

	addStoneGroupConversionRecipes(vanillaStones, vanillaPolishedVaraints);
	addStoneGroupConversionRecipes(vanillaSimpleStones, vanillaFullSimpleStoneVariants);
	addStoneGroupConversionRecipes(vanillaDeepStones, vanillaFullDeepStoneVariants);
	addStoneGroupConversionRecipes(vanillaBlackStones, vanillaFullBlackStoneVariants);
	addStoneGroupConversionRecipes(createStones, fullCreateStoneVariants);

	addStoneRecipes(vanillaStones, vanillaStoneTypes);
	addStoneRecipes(vanillaCobbleStones, vanillaStoneTypes);
	addStoneGroupRecipes(vanillaStones, vanillaPolishedVaraints, incompleteVanillaStoneTypes);
	addStoneGroupRecipes(vanillaSimpleStones, vanillaSimpleStoneVariants, vanillaStoneTypes);
	addStoneGroupRecipes(vanillaDeepStones, vanillaDeepStoneVariants, vanillaStoneTypes);
	addStoneGroupRecipes(vanillaBlackStones, vanillaBlackStoneVariants, vanillaStoneTypes);
	addStoneGroupRecipes(createStones, createStoneVariants, createStoneTypes);
});