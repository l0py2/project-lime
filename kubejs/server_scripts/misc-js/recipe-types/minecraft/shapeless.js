//priority: 9998

MCShapelessRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.ingredients == undefined) {
		return null;
	}
	
	if(!Array.isArray(rawRecipe.ingredients)) {
		return null;
	}
		
	if(rawRecipe.result == undefined) {
		return null;
	}
	
	if(typeof rawRecipe.result != 'object') {
		return null;
	}
		
	let recipe = new MCShapelessRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function MCShapelessRecipe() {
	this.modified = false;
	this.empty = false;
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
				
		for(let i = 0; i < this.json.ingredients.length; i++) {
			if(Array.isArray(this.json.ingredients[i])) {
				for(let j = 0; j < this.json.ingredients[i].length; j++) {
					if(equalIngredients(this.json.ingredients[i][j], originalObject)) {
						replaceIngredient(this.json.ingredients[i][j], replacementObject);
						this.modified = true;
					}
				}
			} else {
				if(equalIngredients(this.json.ingredients[i], originalObject)) {
					replaceIngredient(this.json.ingredients[i], replacementObject);
					this.modified = true;
				}
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
		
		if(equalIngredients(this.json.result, originalObject)) {
			replaceIngredient(this.json.result, replacementObject);
			this.modified = true;
		}
	}
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = ingredientStringToObject(removedItem);
		
		if(equalIngredients(this.json.result, removedItemObject)) {
			this.empty = true;
		}
	}
}

MiscJS.recipeTypes.push(MCShapelessRecipe);