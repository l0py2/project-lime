//priority: 1008

potato.recipes.recipeTypes.set(
	'create_pressing',
	(ingredient, result) => {
		if(typeof ingredient != 'string' && !Ingredient.isIngredient(ingredient)) {
			console.error('Invalid ingredient type (allowed types: string or Ingredient.of)');
			return null;
		}
		
		ingredient = Ingredient.isIngredient(ingredient) ? ingredient.toJson() : Ingredient.of(ingredient).toJson();
		
		if(typeof result != 'string' && !Item.isItem(result)) {
			console.error('Invalid result type (allowed types: string or Item.of)');
			return null;
		}
		
		result = Item.isItem(result) ? result.toJson() : Item.of(result).toJson();
		
		return {
			type: 'create:pressing',
			ingredients: [ingredient],
			results: [result]
		};
	}
);