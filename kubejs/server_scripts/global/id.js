//priority: 100

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