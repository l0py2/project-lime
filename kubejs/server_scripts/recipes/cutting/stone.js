//priority: 8

ServerEvents.recipes(event => {
	function createStoneBlock(mod, name, material) {
		return {
			prefix: global.id[mod](''),
			name: name,
			material: material == undefined ? name : material
		};
	}
	
	function createStoneBlockVariant(mod, name, value) {
		return {
			prefix: global.id[mod](''),
			name: name,
			value: value
		};
	}
	
	function createStoneBlockGroup(baseStoneBlock, variants) {
		return {
			baseStoneBlock: baseStoneBlock,
			variants: variants
		};
	}
	
	function addStoneBlockGroupRecipes(stoneBlockGroup) {
		let baseBlock = `${stoneBlockGroup.baseStoneBlock.prefix}${stoneBlockGroup.baseStoneBlock.name}`;
		
		for(const variant of stoneBlockGroup.variants) {
			let resultBlock = `${variant.prefix}${stoneBlockGroup.baseStoneBlock.material}_${variant.name}`;
			
			event.remove({ output: resultBlock });
			
			event.stonecutting(
				Item.of(resultBlock, variant.value),
				baseBlock
			);
		}
	}
	
	function addStoneBlockConversionRecipes(stoneBlockGroup) {
		for(let i = 0; i < stoneBlockGroup.length; i++) {
			event.remove({ output: stoneBlockGroup[i] });
			
			// Blocks before the current
			for(let j = 0; j < i; j++) {
				event.stonecutting(
					stoneBlockGroup[i],
					stoneBlockGroup[j]
				);
			}
			
			// Blocks after ther current
			for(let j = i + 1; j < stoneBlockGroup.length; j++) {
				event.stonecutting(
					stoneBlockGroup[i],
					stoneBlockGroup[j]
				);
			}
		}
	}
	
	const createVariants = [
		createStoneBlockVariant('CR', 'slab', 2),
		createStoneBlockVariant('CR', 'stairs', 1),
		createStoneBlockVariant('CR', 'wall', 1)
	];
	
	const vanillaVariants = [
		createStoneBlockVariant('MC', 'slab', 2),
		createStoneBlockVariant('MC', 'stairs', 1),
		createStoneBlockVariant('MC', 'wall', 1)
	];
	
	const incompleteVanillaVariants = [
		createStoneBlockVariant('MC', 'slab', 2),
		createStoneBlockVariant('MC', 'stairs', 1)
	];
	
	const stoneBlockGroups = [];
	
	const vanillaStoneTypes = [
		createStoneBlock('MC', 'granite'),
		createStoneBlock('MC', 'diorite'),
		createStoneBlock('MC', 'andesite')
	];
	
	for(const stoneType of vanillaStoneTypes) {
		stoneBlockGroups.push(createStoneBlockGroup(stoneType, vanillaVariants));
		stoneBlockGroups.push(createStoneBlockGroup(createStoneBlock('MC', `polished_${stoneType.material}`), incompleteVanillaVariants));
	}
	
	const cobbleStoneTypes = [
		createStoneBlock('MC', 'cobblestone'),
		createStoneBlock('MC', 'cobbled_deepslate'),
		createStoneBlock('MC', 'mossy_cobblestone')
	];
	
	for(const stoneType of cobbleStoneTypes) {
		stoneBlockGroups.push(createStoneBlockGroup(stoneType, vanillaVariants));
	}
	
	const createStoneTypes = [
		createStoneBlock('MC', 'granite'),
		createStoneBlock('MC', 'diorite'),
		createStoneBlock('MC', 'andesite'),
		createStoneBlock('MC', 'calcite'),
		createStoneBlock('MC', 'dripstone_block', 'dripstone'),
		createStoneBlock('MC', 'deepslate'),
		createStoneBlock('MC', 'tuff'),
		createStoneBlock('CR', 'asurine'),
		createStoneBlock('CR', 'crimsite'),
		createStoneBlock('CR', 'limestone'),
		createStoneBlock('CR', 'ochrum'),
		createStoneBlock('CR', 'scoria'),
		createStoneBlock('CR', 'scorchia'),
		createStoneBlock('CR', 'veridium')
	];
	
	for(const stoneType of createStoneTypes) {		
		stoneBlockGroups.push(createStoneBlockGroup(createStoneBlock('CR', `cut_${stoneType.material}`), createVariants));
		stoneBlockGroups.push(createStoneBlockGroup(createStoneBlock('CR', `polished_cut_${stoneType.material}`), createVariants));
		stoneBlockGroups.push(createStoneBlockGroup(createStoneBlock('CR', `cut_${stoneType.material}_bricks`, `cut_${stoneType.material}_brick`), createVariants));
		stoneBlockGroups.push(createStoneBlockGroup(createStoneBlock('CR', `small_${stoneType.material}_bricks`, `small_${stoneType.material}_brick`), createVariants));
	}
	
	for(const stoneBlockGroup of stoneBlockGroups) {
		addStoneBlockGroupRecipes(stoneBlockGroup);
	}
	
	const stoneConversionGroups = [];
	
	for(const stoneType of createStoneTypes) {
		let group = [];
		
		group.push(`${stoneType.prefix}${stoneType.name}`);
		group.push(global.id.CR(`layered_${stoneType.material}`));
		group.push(global.id.CR(`cut_${stoneType.material}`));
		group.push(global.id.CR(`polished_cut_${stoneType.material}`));
		group.push(global.id.CR(`cut_${stoneType.material}_bricks`));
		group.push(global.id.CR(`small_${stoneType.material}_bricks`));
		group.push(global.id.CR(`${stoneType.material}_pillar`));
		
		stoneConversionGroups.push(group);
	}
	
	for(const stoneConversionGroup of stoneConversionGroups) {
		addStoneBlockConversionRecipes(stoneConversionGroup);
	}
});