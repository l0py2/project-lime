//priority: 8

ServerEvents.recipes(event => {
	function createStoneBlock(prefix, name, value) {
		return {
			prefix: prefix,
			name: name,
			value: value
		};
	}
	
	function createStoneBlockGroup(prefix, base, blocks) {
		return {
			prefix: prefix,
			base: base,
			blocks: blocks
		};
	}
	
	function addStoneBlockGroupRecipes(stoneBlockGroup) {
		let baseBlock = `${stoneBlockGroup.prefix}${stoneBlockGroup.base}`;
		
		for(const block of stoneBlockGroup.blocks) {
			let resultBlock = `${block.prefix}${stoneBlockGroup.base}_${block.name}`;
			
			event.stonecutting(
				Item.of(resultBlock, block.value),
				baseBlock
			);
			
			event.remove({ output: resultBlock });
		}
	}
	
	const allVanillaStoneBlocks = [
		createStoneBlock(global.id.MC(''), 'slab', 2),
		createStoneBlock(global.id.MC(''), 'stairs', 1),
		createStoneBlock(global.id.MC(''), 'wall', 1)
	];
	
	const vanillaStoneBlocks = [
		createStoneBlock(global.id.MC(''), 'slab', 2),
		createStoneBlock(global.id.MC(''), 'stairs', 1)
	];
	
	const slabVanillaStoneBlocks = [
		createStoneBlock(global.id.MC(''), 'slab', 2)
	];
	
	const stoneBlockGroups = [
		createStoneBlockGroup(global.id.MC(''), 'cobblestone', allVanillaStoneBlocks),
		createStoneBlockGroup(global.id.MC(''), 'stone', vanillaStoneBlocks),
		createStoneBlockGroup(global.id.MC(''), 'smooth_stone', slabVanillaStoneBlocks),
	];
	
	for(const stoneBlockGroup of stoneBlockGroups) {
		addStoneBlockGroupRecipes(stoneBlockGroup);
	}
});