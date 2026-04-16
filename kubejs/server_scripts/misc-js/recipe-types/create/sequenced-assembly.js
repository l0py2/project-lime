//priority: 9998

CRSequencedAssemblyRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.ingredient == undefined) {
		return null;
	}
	
	if(typeof rawRecipe.ingredient != 'object') {
		return null;
	}
	
	if(Array.isArray(rawRecipe.ingredient)) {
		return null;
	}
	
	if(rawRecipe.sequence == undefined) {
		return null;
	}
	
	if(!Array.isArray(rawRecipe.sequence)) {
		return null;
	}
	
	if(rawRecipe.results == undefined) {
		return null;
	}
	
	if(!Array.isArray(rawRecipe.results)) {
		return null;
	}
		
	let recipe = new CRSequencedAssemblyRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function CRSequencedAssemblyRecipe() {
	this.modified = false;
	this.empty = false;
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
		
		if(equalIngredients(this.json.ingredient, originalObject)) {
			replaceIngredient(this.json.ingredient, replacementObject);
			this.modified = true;
		}
		
		for(let sequence of this.json.sequence) {
			for(let ingredient of sequence.ingredients) {
				if(equalIngredients(ingredient, originalObject)) {
					replaceIngredient(ingredient, replacementObject);
					this.modified = true;
				}
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
		
		for(let result of this.json.results)  {
			if(equalIngredients(result, originalObject)) {
				replaceIngredient(result, replacementObject);
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

MiscJS.recipeTypes.push(CRSequencedAssemblyRecipe);