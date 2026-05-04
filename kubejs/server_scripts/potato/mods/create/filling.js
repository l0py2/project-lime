//priority: 1008

potato.recipes.recipeTypes.set(
	'create_filling',
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
			if(typeof ingredient != 'string' && !Ingredient.isIngredient(ingredient) && !CreateFluid.isFluid(ingredient)) {
				console.error('Invalid ingredient type (allowed types: string, Ingredient.of, CreateFluid.of)');
				return null;
			}
			
			ingredient = typeof ingredient != 'string' ? ingredient : Ingredient.of(ingredient);
			ingredient = ingredient.toJson();
			
			return ingredient;
		});
		
		result = result instanceof Item ? result : Item.of(result);
		
		return {
			type: 'create:filling',
			ingredients: ingredients,
			results: [
				result.toJson()
			]
		};
	}
);