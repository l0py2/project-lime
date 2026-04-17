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
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(this.multipleInput) {
			for(let i = 0; i < this.json.ingredient.length; i++) {
				if(MiscJS.equalIngredients(this.json.ingredient[i], originalObject)) {
					MiscJS.replaceIngredient(this.json.ingredient[i], replacementObject);
					this.modified = true;
				}
			}
		} else {
			if(MiscJS.equalIngredients(this.json.ingredient, originalObject)) {
				MiscJS.replaceIngredient(this.json.ingredient, replacementObject);
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