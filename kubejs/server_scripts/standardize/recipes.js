ServerEvents.recipes(event => {
	for(const recipeFilter of global.removedRecipes) {
		event.remove(recipeFilter);
	}
	
	const rawRecipes = global.recipes.getAll(event, {}, true);
	const recipes = [];
	const unkownRecipeTypes = new Set();
	
	for(const rawRecipe of rawRecipes) {
		let recipe;
		
		for(const recipeType of global.recipes.types) {
			recipe = recipeType.fromJson(rawRecipe);
			
			if(recipe != null) {
				recipes.push(recipe);
				// Prevent a single recipe to have multiple types
				break;
			}
		}
		
		if(recipe == null) {
			unkownRecipeTypes.add(rawRecipe.type);
		}
	}
	
	for(const recipeType of unkownRecipeTypes) {
		console.log(`Unkown recipe type: ${recipeType}`);
	}
	
	for(const recipe of recipes) {
		for(const [original, replacement] of global.inputReplacements) {
			recipe.replaceInput(original, replacement);
		}
		
		for(const [original, replacement] of global.outputReplacements) {
			recipe.replaceOutput(original, replacement);
		}
		
		for(const removedItem of global.removedItems) {
			recipe.replaceInput(removedItem, global.id.MC('barrier'));
			recipe.removeOutput(removedItem);
		}
	}
	
	for(const recipe of recipes) {
		if(recipe.empty) {
			event.remove({ id: recipe.json.id });
		} else if(recipe.modified) {
			event.remove({ id: recipe.json.id });
			event.custom(recipe.json);
		}
	}
});