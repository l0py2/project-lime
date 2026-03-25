ServerEvents.recipes(event => {
	const chargingRecipes = global.recipes.getAll(event, { type: global.id.CA('charging') });
	const energisingRecipes = global.recipes.getAll(event, { type: global.id.NA('energising') });

	for(const chargingRecipe of chargingRecipes) {
		let exists = false;
		
		for(const energisingRecipe of energisingRecipes) {			
			if(chargingRecipe.result.item == energisingRecipe.results[0].item) {
				exists = true;
			}
		}
		
		if(!exists) {
			let newRecipe = {
				type: global.id.NA('energising'),
				ingredients: [chargingRecipe.input],
				results: [chargingRecipe.result],
				energy_needed: chargingRecipe.energy
			};
				
			if(chargingRecipe.conditions) {
				newRecipe.conditions = chargingRecipe.conditions
			}
			
			event.custom(newRecipe);
		}	
	}

	event.remove({ type: global.id.CA('charging') });
});