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

	addStoneRecipes([createBaseBlock('MC', 'stone')], incompleteVanillaStoneTypes);
	addStoneRecipes([createBaseBlock('MC', 'smooth_stone')], [global.cutting.createBlockType('MC', 'slab', 2)]);
	addStoneRecipes(
		[
			createBaseBlock('MC', 'cobblestone'),
			createBaseBlock('MC', 'mossy_cobblestone'),
			createBaseBlock('MC', 'cobbled_deepslate'),
			createBaseBlock('MC', 'blackstone')
		], vanillaStoneTypes
	);
});