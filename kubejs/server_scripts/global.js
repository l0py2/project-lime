//priority: 99

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

global.id.getOriginalBlock = (blockVariant, sufix) => {
	let rawBlockId = blockVariant.replace('_' + sufix, '');
		
	let blockId = Item.of(rawBlockId).id;
		
	if(blockId != 'minecraft:air') {
		return blockId;
	}
		
	return Item.of(rawBlockId + 's').id;
}