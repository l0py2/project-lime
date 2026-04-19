//priority: 1000

function UnifyJS() {}

UnifyJS.recipeTypes = [];
UnifyJS.ignoredRecipeTypes = [];

UnifyJS.getAllRecipes = (event, filter) => {
	const recipes = [];
	
	event.forEachRecipe(filter, recipe => {
		recipes.push({
			id: recipe.getId(),
			json: JSON.parse(recipe.json.toString())
		});
	});
	
	return recipes;
};

UnifyJS.getAllRecipesObjects = (event, filter) => {
	const rawRecipes = UnifyJS.getAllRecipes(event, filter);
	const recipes = [];
	const unkownRecipeTypes = new Set();
	
	for(const rawRecipe of rawRecipes) {
		let recipe;
		
		for(const recipeType of UnifyJS.recipeTypes) {
			recipe = recipeType.fromJson(rawRecipe.json);
			
			if(recipe != null) {
				recipe.id = rawRecipe.id;
				recipes.push(recipe);
				// Prevent a single recipe to have multiple types
				break;
			}
		}
		
		if(recipe == null) {
			unkownRecipeTypes.add(rawRecipe.json.type);
		}
	}
	
	for(const recipeType of unkownRecipeTypes) {
		if(UnifyJS.ignoredRecipeTypes.indexOf(recipeType) == -1) {
			console.log(`Unkown recipe type: ${recipeType}`);
		}
	}
	
	return recipes;
}

UnifyJS.replaceInput = (event, filter, original, replacement) => {
	const recipes = UnifyJS.getAllRecipesObjects(event, {});
	
	for(const recipe of recipes) {
		recipe.replaceInput(original, replacement);
	}
	
	for(const recipe of recipes) {
		if(recipe.modified) {
			event.custom(recipe.toJson()).id(recipe.id);
		}
	}
};

UnifyJS.replaceOutput = (event, filter, original, replacement) => {
	const recipes = UnifyJS.getAllRecipesObjects(event, {});
	
	for(const recipe of recipes) {
		recipe.replaceOutput(original, replacement);
	}
	
	for(const recipe of recipes) {
		if(recipe.modified) {
			event.custom(recipe.toJson()).id(recipe.id);
		}
	}
};

UnifyJS.removeInput = (event, filter, original) => {
	UnifyJS.replaceInput(event, filter, original, 'minecraft:air');
};

UnifyJS.removeOutput = (event, filter, original) => {
	const recipes = UnifyJS.getAllRecipesObjects(event, filter);
	
	for(const recipe of recipes) {
		recipe.removeOutput(original);
	}
	
	for(const recipe of recipes) {
		if(recipe.empty) {
			event.remove({ id: recipe.id });
		} else if(recipe.modified) {
			event.custom(recipe.toJson()).id(recipe.id);
		}
	}
};