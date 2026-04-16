//priority: 9998

SimpleRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.ingredient == undefined) {
		return null;
	}
		
	if(rawRecipe.result == undefined) {
		return null;
	}
			
	if(typeof rawRecipe.result != 'string') {
		return null;
	}
		
	let recipe = new SimpleRecipe();
	
	recipe.json = rawRecipe;
	
	if(Array.isArray(recipe.json.ingredient)) {
		recipe.multipleInput = true;
	}
		
	return recipe;
};

function SimpleRecipe() {
	this.modified = false;
	this.empty = false;
	this.json = {};
	this.multipleInput = false;
	
	this.replaceInput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
		
		if(this.multipleInput) {
			for(let i = 0; i < this.json.ingredient.length; i++) {
				if(equalIngredients(this.json.ingredient[i], originalObject)) {
					replaceIngredient(this.json.ingredient[i], replacementObject);
					this.modified = true;
				}
			}
		} else {
			if(equalIngredients(this.json.ingredient, originalObject)) {
				replaceIngredient(this.json.ingredient, replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		if(this.json.result == original) {
			this.json.result = replacement;
			this.modified = true;
		}
	};
	
	this.removeOutput = (removedItem) => {
		if(this.json.result == removedItem) {
			this.empty = true;
		}
	};
}

MiscJS.recipeTypes.push(SimpleRecipe);