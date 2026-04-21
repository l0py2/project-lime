ServerEvents.recipes(event => {
	const smeltingRecipes = UnifyJS.getAllRecipes(event, { type: 'minecraft:smelting' });
	const smokingRecipes = UnifyJS.getAllRecipes(event, { type: 'minecraft:smoking' }).map(recipe => recipe.json);
	const blastingRecipes = UnifyJS.getAllRecipes(event, { type: 'minecraft:blasting' }).map(recipe => recipe.json);
	
	for(const smeltingRecipeWithId of smeltingRecipes) {
		let smeltingRecipe = smeltingRecipeWithId.json;
		
		let food = false;
		let exists = false;
		
		for(const smokingRecipe of smokingRecipes) {
			if(smeltingRecipe.result.id == smokingRecipe.result.id) {
				food = true;
			}
		}
		
		for(const blastingRecipe of blastingRecipes) {
			if(smeltingRecipe.result.id == blastingRecipe.result.id) {
				exists = true;
			}
		}
		
		if(!(food || exists)) {
			let newRecipe = Object.assign(smeltingRecipe);
			
			newRecipe.type = 'minecraft:blasting';
			newRecipe.cookingtime = 100;
			
			event.custom(newRecipe).id(smeltingRecipeWithId.id);
		}
	}
	
	event.remove({ type: 'minecraft:smelting' });
});