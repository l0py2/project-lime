//priority: 8

ServerEvents.recipes(event => {
	const copperIngot = global.id.MC('copper_ingot');
	
	const copperStates = [
		'exposed',
		'weathered',
		'oxidized'
	];
	
	function createBaseCopperBlock(mod, baseName, format) {
		return {
			mod: mod,
			baseName: baseName,
			format: format
		};
	}
	
	function createCopperBlock(mod, format, value) {
		return {
			mod: mod,
			format: format,
			value: value
		};
	}
	
	function addCopperBlockListConversionRecipes(copperBlocks, copperStates) {
		for(let i = 0; i < copperBlocks.length; i++) {
			event.remove({ output: global.id[copperBlocks[i].mod](copperBlocks[i].baseName) });
			
			for(let j = 0; j < i; j++) {
				event.stonecutting(
					global.id[copperBlocks[i].mod](copperBlocks[i].baseName),
					global.id[copperBlocks[j].mod](copperBlocks[j].baseName)
				);
			}
			
			for(let j = i + 1; j < copperBlocks.length; j++) {
				event.stonecutting(
					global.id[copperBlocks[i].mod](copperBlocks[i].baseName),
					global.id[copperBlocks[j].mod](copperBlocks[j].baseName)
				);
			}
			
			event.remove({ output: global.id[copperBlocks[i].mod](`waxed_${copperBlocks[i].baseName}`) });
			
			for(let j = 0; j < i; j++) {
				event.stonecutting(
					global.id[copperBlocks[i].mod](`waxed_${copperBlocks[i].baseName}`),
					global.id[copperBlocks[j].mod](`waxed_${copperBlocks[j].baseName}`)
				);
			}
			
			for(let j = i + 1; j < copperBlocks.length; j++) {
				event.stonecutting(
					global.id[copperBlocks[i].mod](`waxed_${copperBlocks[i].baseName}`),
					global.id[copperBlocks[j].mod](`waxed_${copperBlocks[j].baseName}`)
				);
			}
			
			for(let copperState of copperStates) {
				let state = `${copperState}`;
				
				event.remove({ output: global.id[copperBlocks[i].mod](copperBlocks[i].format(state)) });
				
				for(let j = 0; j < i; j++) {
					event.stonecutting(
						global.id[copperBlocks[i].mod](copperBlocks[i].format(state)),
						global.id[copperBlocks[j].mod](copperBlocks[j].format(state))
					);
				}
				
				for(let j = i + 1; j < copperBlocks.length; j++) {
					event.stonecutting(
						global.id[copperBlocks[i].mod](copperBlocks[i].format(state)),
						global.id[copperBlocks[j].mod](copperBlocks[j].format(state))
					);
				}
				
				state = `waxed_${copperState}`;
				
				event.remove({ output: global.id[copperBlocks[i].mod](copperBlocks[i].format(state)) });
				
				for(let j = 0; j < i; j++) {
					event.stonecutting(
						global.id[copperBlocks[i].mod](copperBlocks[i].format(state)),
						global.id[copperBlocks[j].mod](copperBlocks[j].format(state))
					);
				}
				
				for(let j = i + 1; j < copperBlocks.length; j++) {
					event.stonecutting(
						global.id[copperBlocks[i].mod](copperBlocks[i].format(state)),
						global.id[copperBlocks[j].mod](copperBlocks[j].format(state))
					);
				}
			}
		}
	}
	
	function addCopperBlockRecipes(baseCopperBlock, copperBlock, copperStates) {
		let baseCopperBlockId = global.id[baseCopperBlock.mod](baseCopperBlock.baseName);
		
		let prefix = ``;
		let resultBlock = global.id[copperBlock.mod](copperBlock.format(prefix));
		
		event.remove({ output: resultBlock });
		
		event.stonecutting(
			Item.of(resultBlock, copperBlock.value),
			baseCopperBlockId
		);
		
		baseCopperBlockId = global.id[baseCopperBlock.mod](`waxed_${baseCopperBlock.baseName}`);
		
		prefix = `waxed_`;
		resultBlock = global.id[copperBlock.mod](copperBlock.format(prefix));
		
		event.remove({ output: resultBlock });
		
		event.stonecutting(
			Item.of(resultBlock, copperBlock.value),
			baseCopperBlockId
		);
		
		for(let copperState of copperStates) {
			baseCopperBlockId = global.id[baseCopperBlock.mod](baseCopperBlock.format(copperState));
			
			prefix = `${copperState}_`;
			resultBlock = global.id[copperBlock.mod](copperBlock.format(prefix));
			
			event.remove({ output: resultBlock });
			
			event.stonecutting(
				Item.of(resultBlock, copperBlock.value),
				baseCopperBlockId
			);
			
			baseCopperBlockId = global.id[baseCopperBlock.mod](baseCopperBlock.format(`waxed_${copperState}`));
			
			prefix = `waxed_${copperState}_`;
			resultBlock = global.id[copperBlock.mod](copperBlock.format(prefix));
			
			event.remove({ output: resultBlock });
			
			event.stonecutting(
				Item.of(resultBlock, copperBlock.value),
				baseCopperBlockId
			);
		}
	}
	
	const baseCopperBlocks = [
		createBaseCopperBlock('MC', 'copper_block', state => `${state}_copper`),
		createBaseCopperBlock('MC', 'cut_copper', state => `${state}_cut_copper`),
		createBaseCopperBlock('CR', 'copper_shingles', state => `${state}_copper_shingles`),
		createBaseCopperBlock('CR', 'copper_tiles', state => `${state}_copper_tiles`)
	];
	
	const copperBlocks = [
		createCopperBlock('CR', prefix => `${prefix}copper_shingle_slab`, 2),
		createCopperBlock('CR', prefix => `${prefix}copper_shingle_stairs`, 1),
		createCopperBlock('CR', prefix => `${prefix}copper_tile_slab`, 2),
		createCopperBlock('CR', prefix => `${prefix}copper_tile_stairs`, 1),
		createCopperBlock('MC', prefix => `${prefix}cut_copper_slab`, 2),
		createCopperBlock('MC', prefix => `${prefix}cut_copper_stairs`, 1)		
	];
	
	addCopperBlockListConversionRecipes(baseCopperBlocks, copperStates);
	
	for(let baseCopperBlock of baseCopperBlocks) {
		for(let copperBlock of copperBlocks) {
			addCopperBlockRecipes(baseCopperBlock, copperBlock, copperStates);
		}
	}
});