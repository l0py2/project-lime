function ingredientStringToObject(ingredientString) {
	return ingredientString.startsWith('#') ? { tag: ingredientString.slice(1) } : { item: ingredientString };
}

function equalIngredients(ingredient1, ingredient2) {
	return ingredient1.item == ingredient2.item
		&& ingredient1.tag == ingredient2.tag;
}

function replaceIngredient(original, replacement) {
	if(replacement.item != undefined) {
		original.item = replacement.item;
		delete original.tag;
	} else {
		original.tag = replacement.tag;
		delete original.item;
	}
}

ServerEvents.recipes(event => {
	for(const recipeFilter of global.removedRecipes) {
		event.remove(recipeFilter);
	}
	
	const rawRecipes = global.recipes.getAll(event, {}, true);
	
	const recipes = [];
	
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