//priority: 100

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