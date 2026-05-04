//priority: 1008

potato.recipes.recipeTypes.set(
	'create_mixing',
	(ingredients, result, heatRequirement) => {
		if(!Array.isArray(ingredients)) {
			console.error('Invalid ingredients type (allowed types: array)');
			return null;
		}
		
		ingredients = ingredients.map(ingredient => {
			if(typeof ingredient != 'string' && !Ingredient.isIngredient(ingredient)) {
				console.error('Invalid ingredient type (allowed types: string or Ingredient.of)');
				return null;
			}
			
			ingredient = Ingredient.isIngredient(ingredient) ? ingredient : Ingredient.of(ingredient);
			ingredient = ingredient.toJson();
			
			return ingredient;
		});
		
		if(typeof result != 'string' && !Item.isItem(result)) {
			console.error('Invalid result type (allowed types: string or Item.of)');
			return null;
		}
		
		result = Item.isItem(result) ? result : Item.of(result);
		
		let recipe = {
			type: 'create:mixing',
			ingredients: ingredients,
			results: [
				result.toJson()
			]
		};
		
		if(heatRequirement == undefined) {
			return recipe;
		}
		
		if(typeof heatRequirement != 'string') {
			console.error('Invalid heat requirement type (allowed types: string)');
			return null;
		}
		
		recipe.heat_requirement = heatRequirement;
		
		return recipe;
	}
);