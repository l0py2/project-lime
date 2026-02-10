//priority: 8

ServerEvents.recipes(event => {
	function createBaseBlock(mod, name, material) {
		return {
			mod: mod,
			name: name,
			material: material == undefined ? name : material
		};
	}
	
	function addBaseStoneGroupConversionRecipes(baseStones) {
		let stones = [];

		for(const baseStone of baseStones) {
			stones.push(global.id[baseStone.mod](baseStone.name));
		}

		global.cutting.addCuttingConversionRecipes(event, stones);
	}

	function addStoneGroupConversionRecipes(baseStones, stoneVariants) {
		for(const baseStone of baseStones) {
			let stones = [];

			stones.push(global.id[baseStone.mod](baseStone.name));

			for(const stoneVariant of stoneVariants) {
				stones.push(global.id[stoneVariant.mod](stoneVariant.blockFormat(baseStone.material)));
			}

			global.cutting.addCuttingConversionRecipes(event, stones);
		}
	}

	function addStoneRecipes(stones, stoneTypes) {
		for(const stone of stones) {
			let baseBlock = global.id[stone.mod](stone.name);
			let material = stone.material;

			for(const stoneType of stoneTypes) {
				let resultBlock = global.id[stoneType.mod](`${material}_${stoneType.name}`);
				
				global.cutting.addCuttingRecipe(event, baseBlock, resultBlock, stoneType.value);
			}
		}
	}

	const vanillaStones = [
		createBaseBlock('MC', 'granite'),
		createBaseBlock('MC', 'diorite'),
		createBaseBlock('MC', 'andesite')
	];

	const vanillaSimpleStones = [
		createBaseBlock('MC', 'stone')
	];

	const vanillaDeepStones = [
		createBaseBlock('MC', 'deepslate')
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

	const vanillaStoneTypes = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1),
		global.cutting.createBlockType('MC', 'wall', 1)
	];

	const incompleteVanillaStoneTypes = [
		global.cutting.createBlockType('MC', 'slab', 2),
		global.cutting.createBlockType('MC', 'stairs', 1)
	];

	addBaseStoneGroupConversionRecipes([
		createBaseBlock('MC', 'cobblestone'),
		createBaseBlock('MC', 'mossy_cobblestone'),
		createBaseBlock('MC', 'stone')
	]);
	addBaseStoneGroupConversionRecipes([
		createBaseBlock('MC', 'cobbled_deepslate'),
		createBaseBlock('MC', 'deepslate')
	]);

	addStoneGroupConversionRecipes(vanillaStones, vanillaPolishedVaraints);
	addStoneGroupConversionRecipes(vanillaSimpleStones, vanillaFullSimpleStoneVariants);
	addStoneGroupConversionRecipes(vanillaDeepStones, vanillaFullDeepStoneVariants);

	addStoneRecipes([createBaseBlock('MC', 'stone')], incompleteVanillaStoneTypes);
	addStoneRecipes([createBaseBlock('MC', 'smooth_stone')], [global.cutting.createBlockType('MC', 'slab', 2)]);
	addStoneRecipes(vanillaStones, vanillaStoneTypes);
	addStoneRecipes(
		[
			createBaseBlock('MC', 'cobblestone'),
			createBaseBlock('MC', 'mossy_cobblestone'),
			createBaseBlock('MC', 'cobbled_deepslate'),
			createBaseBlock('MC', 'blackstone')
		], vanillaStoneTypes
	);

	function stonesToMaterials(stones) {
		return stones.map(stone => stone.material);
	}

	global.cutting.addCuttingGroupRecipes(event, stonesToMaterials(vanillaStones), vanillaPolishedVaraints, incompleteVanillaStoneTypes);
	global.cutting.addCuttingGroupRecipes(event, stonesToMaterials(vanillaSimpleStones), vanillaSimpleStoneVariants, vanillaStoneTypes);
	global.cutting.addCuttingGroupRecipes(event, stonesToMaterials(vanillaDeepStones), vanillaDeepStoneVariants, vanillaStoneTypes);
});