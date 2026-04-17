//priority: 9998

FarmersdelightCookingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'farmersdelight:cooking') {
		return null;
	}
		
	let recipe = new FarmersdelightCookingRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function FarmersdelightCookingRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	this.multipleInput = false;
	
	this.replaceInput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(this.multipleInput) {
			for(let i = 0; i < this.json.ingredients.length; i++) {
				if(MiscJS.equalIngredients(this.json.ingredients[i], originalObject)) {
					MiscJS.replaceIngredient(this.json.ingredients[i], replacementObject);
					this.modified = true;
				}
			}
		} else {
			if(MiscJS.equalIngredients(this.json.ingredients, originalObject)) {
				MiscJS.replaceIngredient(this.json.ingredients, replacementObject);
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
	
	this.toJson = () => {
		return this.json;
	};
}

MiscJS.recipeTypes.push(FarmersdelightCookingRecipe);