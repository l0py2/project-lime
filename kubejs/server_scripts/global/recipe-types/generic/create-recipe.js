//priority: 98

CreateRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.ingredients == undefined) {
		return null;
	}
	
	if(!Array.isArray(rawRecipe.ingredients)) {
		return null;
	}
		
	if(rawRecipe.results == undefined) {
		return null;
	}
	
	if(!Array.isArray(rawRecipe.results)) {
		return null;
	}
		
	let recipe = new CreateRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function CreateRecipe() {
	this.modified = false;
	this.empty = false;
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
				
		for(let i = 0; i < this.json.ingredients.length; i++) {
			if(equalIngredients(this.json.ingredients[i], originalObject)) {
				replaceIngredient(this.json.ingredients[i], replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
		
		for(let i = 0; i < this.json.results.length; i++) {
			if(equalIngredients(this.json.results[i], originalObject)) {
				replaceIngredient(this.json.results[i], replacementObject);
				this.modified = true;
			}
		}
	}
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = ingredientStringToObject(removedItem);
		
		let indexToRemove;
		
		do {
			indexToRemove = -1;
			
			for(let i = 0; i < this.json.results.length; i++) {
				if(equalIngredients(this.json.results[i], removedItemObject)) {
					indexToRemove = i;
					break;
				}
			}
			
			if(indexToRemove != -1) {
				this.json.results.splice(indexToRemove, 1);
				this.modified = true;
			}
		} while(indexToRemove != -1);
		
		if(this.json.results.length < 1) {
			this.empty = true;
		}
	}
}

global.recipes.types.push(CreateRecipe);