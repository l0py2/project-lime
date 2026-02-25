ServerEvents.recipes(event => {
	event.remove({ type: global.id.CR('cutting') });
	
	const sawingRecipes = global.recipes.getAll(event, { type: global.id.SM('woodcutting') });
	
	for(const sawingRecipe of sawingRecipes) {
		let complex = false;
		
		if(sawingRecipe.ingredient_count > 1) {
			complex = true;
		}
		
		if(!complex) {
			event.custom({
				type: global.id.CR('cutting'),
				processingTime: 50,
				ingredients: sawingRecipe.ingredient,
				results: [
					{
						item: sawingRecipe.result,
						count: sawingRecipe.count
					}
				]
			});
		}
	}
});