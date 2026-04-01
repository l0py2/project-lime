ServerEvents.recipes(event => {
	const smeltingRecipes = global.recipes.getAll(event, { type: global.id.MC('smelting') });
	const smokingRecipes = global.recipes.getAll(event, { type: global.id.MC('smoking') });
	const blastingRecipes = global.recipes.getAll(event, { type: global.id.MC('blasting') });
	
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
			
			newRecipe.type = global.id.MC('blasting');
			newRecipe.cookingtime = 100;
			
			event.custom(newRecipe);
		}
	}
	
	event.remove({ type: global.id.MC('smelting') });
});