//priority: 99

global.recipes = {
	getAll: (event, filter, returnIds) => {
		const recipes = [];
		
		event.forEachRecipe(
			filter,
			recipe => {
				let recipeJson = JSON.parse(recipe.json.toString());
				
				if(returnIds) {
					recipeJson.id = recipe.getId();
				}
				
				recipes.push(recipeJson);
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