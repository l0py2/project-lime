//priority: 1008

potato.recipes.recipeTypes.set(
	'create_item_application',
	(ingredients, result) => {
		if(!Array.isArray(ingredients)) {
			console.error('Invalid ingredients type (allowed types: array)');
			return null;
		}
		
		if(ingredients.length != 2) {
			console.error('Invalid ingredients (array length: 2)');
			return null;
		}
		
		if(typeof result != 'string' && !Item.isItem(result)) {
			console.error('Invalid result type (allowed types: string or Item.of)');
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
		
		result = result instanceof Item ? result : Item.of(result);
		
		return {
			type: 'create:item_application',
			ingredients: ingredients,
			results: [
				result.toJson()
			]
		};
	}
);