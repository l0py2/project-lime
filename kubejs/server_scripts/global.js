//priority: 99

global.id.getOriginalBlock = (blockVariant, sufix) => {
	let rawBlockId = blockVariant.replace('_' + sufix, '');
	let blockName = rawBlockId.slice(rawBlockId.indexOf(':') + 1);
		
	let blockId = Item.of(rawBlockId).id;
		
	if(blockId != 'minecraft:air') {
		return blockId;
	}
		
	blockId = Item.of(rawBlockId + 's').id;
	
	if(blockId != 'minecraft:air') {
		return blockId;
	}
	
	blockId = Item.of(rawBlockId + '_block').id;
	
	if(blockId != 'minecraft:air') {
		return blockId;
	}
	
	blockId = Item.of(rawBlockId + '_planks').id;
	
	if(blockId != 'minecraft:air') {
		return blockId;
	}
	
	blockId = Item.of(global.id.MC(blockName)).id;
	
	if(blockId != 'minecraft:air') {
		return blockId;
	}
	
	blockId = Item.of(global.id.MC(blockName) + '_block').id;
	
	if(blockId != 'minecraft:air') {
		return blockId;
	}
	
	blockId = Item.of(global.id.MC(blockName) + '_planks').id;
	
	if(blockId != 'minecraft:air') {
		return blockId;
	}
	
	return 'minecraft:air';
}

global.recipes = {
	getAll: (event, filter) => {
		const recipes = [];
		
		event.forEachRecipe(
			filter,
			recipe => {
				recipes.push(JSON.parse(recipe.json.toString()));
			}
		);
		
		return recipes;
	},
	revertBlockVariant: (event, blocks, value, sufix) => {
		for(const block of blocks) {
			let originalBlock = global.id.getOriginalBlock(block, sufix);
			
			if(originalBlock != 'minecraft:air') {
				event.remove({ input: block, output: originalBlock });
				
				event.shapeless(
					originalBlock,
					[Item.of(block, value)]
				);
			}
		}
	},
	CA: {
		rolling: (event, input, output) => {			
			event.custom({
				type: global.id.CA('rolling'),
				input: input.toJson(),
				result: output.toJson()
			});
		}
	}
};