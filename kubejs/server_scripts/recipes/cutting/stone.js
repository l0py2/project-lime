//priority: 8

ServerEvents.recipes(event => {
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
		global.cutting.createBaseBlock('MC', 'granite'),
		global.cutting.createBaseBlock('MC', 'diorite'),
		global.cutting.createBaseBlock('MC', 'andesite')
	];

	const vanillaCobbleStones = [
		global.cutting.createBaseBlock('MC', 'cobblestone'),
		global.cutting.createBaseBlock('MC', 'mossy_cobblestone'),
		global.cutting.createBaseBlock('MC', 'cobbled_deepslate'),
		global.cutting.createBaseBlock('MC', 'blackstone')
	];
	
	const vanillaSimpleStones = [
		global.cutting.createBaseBlock('MC', 'stone')
	];
	
	const vanillaDeepStones = [
		global.cutting.createBaseBlock('MC', 'deepslate')
	];
	
	const vanillaBlackStones = [
		global.cutting.createBaseBlock('MC', 'blackstone')
	]

	const createStones = [
		global.cutting.createBaseBlock('MC', 'granite'),
		global.cutting.createBaseBlock('MC', 'diorite'),
		global.cutting.createBaseBlock('MC', 'andesite'),
		global.cutting.createBaseBlock('MC', 'calcite'),
		global.cutting.createBaseBlock('MC', 'dripstone_block', 'dripstone'),
		global.cutting.createBaseBlock('MC', 'deepslate'),
		global.cutting.createBaseBlock('MC', 'tuff'),
		global.cutting.createBaseBlock('CR', 'asurine'),
		global.cutting.createBaseBlock('CR', 'crimsite'),
		global.cutting.createBaseBlock('CR', 'limestone'),
		global.cutting.createBaseBlock('CR', 'ochrum'),
		global.cutting.createBaseBlock('CR', 'scoria'),
		global.cutting.createBaseBlock('CR', 'scorchia'),
		global.cutting.createBaseBlock('CR', 'veridium')
	];

	const vanillaPolishedVaraints = [
		global.cutting.createBlockVariant('MC', (material) => `polished_${material}`)
	];
	
	const vanillaSimpleStoneVariants = [
		global.cutting.createBlockVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `mossy_${material}_bricks`, (material) => `mossy_${material}_brick`)
	];
	
	const vanillaFullSimpleStoneVariants = [
		global.cutting.createBlockVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `mossy_${material}_bricks`, (material) => `mossy_${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `chiseled_${material}_bricks`, (material) => `chiseled_${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `smooth_${material}`)
	];

	const vanillaDeepStoneVariants = [
		global.cutting.createBlockVariant('MC', (material) => `polished_${material}`),
		global.cutting.createBlockVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `${material}_tiles`, (material) => `${material}_tile`)
	];

	const vanillaFullDeepStoneVariants = [
		global.cutting.createBlockVariant('MC', (material) => `chiseled_${material}`),
		global.cutting.createBlockVariant('MC', (material) => `polished_${material}`),
		global.cutting.createBlockVariant('MC', (material) => `${material}_bricks`, (material) => `${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `cracked_${material}_bricks`, (material) => `cracked_${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `${material}_tiles`),
		global.cutting.createBlockVariant('MC', (material) => `cracked_${material}_tiles`)
	];
	
	const vanillaBlackStoneVariants = [
		global.cutting.createBlockVariant('MC', (material) => `polished_${material}`),
		global.cutting.createBlockVariant('MC', (material) => `polished_${material}_bricks`, (material) => `polished_${material}_brick`)
	];
	
	const vanillaFullBlackStoneVariants = [
		global.cutting.createBlockVariant('MC', (material) => `polished_${material}`),
		global.cutting.createBlockVariant('MC', (material) => `polished_${material}_bricks`, (material) => `polished_${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `cracked_polished_${material}_bricks`, (material) => `polished_${material}_brick`),
		global.cutting.createBlockVariant('MC', (material) => `chiseled_polished_${material}`),
	];

	const createStoneVariants = [
		global.cutting.createBlockVariant('CR', (material) => `cut_${material}`),
		global.cutting.createBlockVariant('CR', (material) => `polished_cut_${material}`),
		global.cutting.createBlockVariant('CR', (material) => `cut_${material}_bricks`, (material) => `cut_${material}_brick`),
		global.cutting.createBlockVariant('CR', (material) => `small_${material}_bricks`, (material) => `small_${material}_brick`)
	];

	const fullCreateStoneVariants = [
		global.cutting.createBlockVariant('CR', (material) => `layered_${material}`),
		global.cutting.createBlockVariant('CR', (material) => `cut_${material}`),
		global.cutting.createBlockVariant('CR', (material) => `polished_cut_${material}`),
		global.cutting.createBlockVariant('CR', (material) => `cut_${material}_bricks`, (material) => `cut_${material}_brick`),
		global.cutting.createBlockVariant('CR', (material) => `small_${material}_bricks`, (material) => `small_${material}_brick`),
		global.cutting.createBlockVariant('CR', (material) => `${material}_pillar`)
	];

	const vanillaStoneTypes = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1),
		global.cutting.createBlockType('MC', 'wall', 1)
	];

	const incompleteVanillaStoneTypes = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1)
	];

	const createStoneTypes = [
		global.cutting.createBlockType('CR', 'slab', 2),
		global.cutting.createBlockType('CR', 'stairs', 1),
		global.cutting.createBlockType('CR', 'wall', 1)
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