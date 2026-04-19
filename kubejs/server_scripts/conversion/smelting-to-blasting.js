ServerEvents.recipes(event => {
	const smeltingRecipes = UnifyJS.getAllRecipes(event, { type: 'minecraft:smelting' }).map(recipe => recipe.json);
	const smokingRecipes = UnifyJS.getAllRecipes(event, { type: 'minecraft:smoking' }).map(recipe => recipe.json);
	const blastingRecipes = UnifyJS.getAllRecipes(event, { type: 'minecraft:blasting' }).map(recipe => recipe.json);
	
	for(const smeltingRecipe of smeltingRecipes) {
		let food = false;
		let exists = false;
		
		for(const smokingRecipe of smokingRecipes) {
			if(smeltingRecipe.result == smokingRecipe.result) {
				food = true;
			}
		}
		
		for(const blastingRecipe of blastingRecipes) {
			if(smeltingRecipe.result == blastingRecipe.result) {
				exists = true;
			}
		}
		
		if(!(food || exists)) {
			let newRecipe = Object.assign(smeltingRecipe);
			
			newRecipe.type = 'minecraft:blasting';
			newRecipe.cookingtime = 100;
			
			event.custom(newRecipe);
		}
	}
	
	event.remove({ type: 'minecraft:smelting' });
});