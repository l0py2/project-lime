//priority: 100

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