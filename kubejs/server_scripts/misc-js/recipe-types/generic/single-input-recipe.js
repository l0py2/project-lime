//priority: 9998

SingleInputRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.input == undefined) {
		return null;
	}
	
	if(typeof rawRecipe.input != 'object') {
		return null;
	}
	
	if(Array.isArray(rawRecipe.input)) {
		return null;
	}

	if(rawRecipe.result == undefined) {
		return null;
	}
	
	if(typeof rawRecipe.result != 'object') {
		return null;
	}
	
	if(Array.isArray(rawRecipe.result)) {
		return null;
	}
		
	let recipe = new SingleInputRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function SingleInputRecipe() {
	this.modified = false;
	this.empty = false;
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(MiscJS.equalIngredients(this.json.input, originalObject)) {
			MiscJS.replaceIngredient(this.json.input, replacementObject);
			this.modified = true;
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(MiscJS.equalIngredients(this.json.result, originalObject)) {
			MiscJS.replaceIngredient(this.json.result, replacementObject);
			this.modified = true;
		}
	};
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = MiscJS.ingredientStringToObject(removedItem);
		
		if(MiscJS.equalIngredients(this.json.result, removedItemObject)) {
			this.empty = true;
		}
	};
}

MiscJS.recipeTypes.push(SingleInputRecipe);