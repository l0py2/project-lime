ServerEvents.recipes(event => {
	for(const recipeFilter of global.removedRecipes) {
		event.remove(recipeFilter);
	}
	
	const recipes = MiscJS.getAllRecipesObjects(event, {});
	
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