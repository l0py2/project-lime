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
	}
};