//priority: 9998

CreateSequencedAssemblyRecipe.fromJson = (rawRecipe) => {
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
		
	let recipe = new CreateSequencedAssemblyRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function CreateSequencedAssemblyRecipe() {
	this.modified = false;
	this.empty = false;
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(MiscJS.equalIngredients(this.json.ingredient, originalObject)) {
			MiscJS.replaceIngredient(this.json.ingredient, replacementObject);
			this.modified = true;
		}
		
		for(let sequence of this.json.sequence) {
			for(let ingredient of sequence.ingredients) {
				if(MiscJS.equalIngredients(ingredient, originalObject)) {
					MiscJS.replaceIngredient(ingredient, replacementObject);
					this.modified = true;
				}
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		for(let result of this.json.results)  {
			if(MiscJS.equalIngredients(result, originalObject)) {
				MiscJS.replaceIngredient(result, replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = MiscJS.ingredientStringToObject(removedItem);
		
		let indexToRemove;
		
		do {
			indexToRemove = -1;
			
			for(let i = 0; i < this.json.results.length; i++) {
				if(MiscJS.equalIngredients(this.json.results[i], removedItemObject)) {
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
	};
}

MiscJS.recipeTypes.push(CreateSequencedAssemblyRecipe);