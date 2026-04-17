//priority: 10000

function MiscJS() {}

MiscJS.recipeTypes = [];
MiscJS.ignoredRecipeTypes = [];

MiscJS.getAllRecipes = (event, filter, advanced) => {
	const recipes = [];
	
	if(advanced) {
		event.forEachRecipe(filter, recipe => {
			recipes.push({
				id: recipe.getId(),
				json: JSON.parse(recipe.json.toString())
			});
		});
	} else {
		event.forEachRecipe(filter, recipe => {
			recipes.push(JSON.parse(recipe.json.toString()));
		});
	}
	
	return recipes;
};

MiscJS.getAllRecipesObjects = (event, filter) => {
	const rawRecipes = MiscJS.getAllRecipes(event, filter, true);
	const recipes = [];
	const unkownRecipeTypes = new Set();
	
	for(const rawRecipe of rawRecipes) {
		let recipe;
		
		for(const recipeType of MiscJS.recipeTypes) {
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
		if(MiscJS.ignoredRecipeTypes.indexOf(recipeType) == -1) {
			console.log(`Unkown recipe type: ${recipeType}`);
		}
	}
	
	return recipes;
}

MiscJS.replaceInput = (event, filter, original, replacement) => {
	const recipes = MiscJS.getAllRecipesObjects(event, {});
	
	for(const recipe of recipes) {
		recipe.replaceInput(original, replacement);
	}
	
	for(const recipe of recipes) {
		if(recipe.modified) {
			event.custom(recipe.toJson()).id(recipe.id);
		}
	}
};

MiscJS.replaceOutput = (event, filter, original, replacement) => {
	const recipes = MiscJS.getAllRecipesObjects(event, {});
	
	for(const recipe of recipes) {
		recipe.replaceOutput(original, replacement);
	}
	
	for(const recipe of recipes) {
		if(recipe.modified) {
			event.custom(recipe.toJson()).id(recipe.id);
		}
	}
};

MiscJS.removeInput = (event, filter, original) => {
	MiscJS.replaceInput(event, filter, original, 'minecraft:air');
};

MiscJS.removeOutput = (event, filter, original) => {
	const recipes = MiscJS.getAllRecipesObjects(event, filter);
	
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