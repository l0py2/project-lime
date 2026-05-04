//priority: 1008

potato.recipes.recipeTypes.set(
	'create_cutting',
	(ingredient, result, processingTime) => {
		if(typeof ingredient != 'string' && !Ingredient.isIngredient(ingredient)) {
			console.error('Invalid ingredient type (allowed types: string or Ingredient.of)');
			return null;
		}
		
		if(typeof result != 'string' && !Item.isItem(result)) {
			console.error('Invalid result type (allowed types: string or Item.of)');
			return null;
		}
		
		if(typeof processingTime != 'number') {
			console.error('Invalid processing time type (allowed types: number)');
			return null;
		}
		
		ingredient = Ingredient.isIngredient(ingredient) ? ingredient : Ingredient.of(ingredient);
		result = Item.isItem(result) ? result : Item.of(result);
		
		return {
			type: 'create:cutting',
			ingredients: [
				ingredient.toJson()
			],
			results: [
				result.toJson()
			],
			processing_time: processingTime
		};
	}
);