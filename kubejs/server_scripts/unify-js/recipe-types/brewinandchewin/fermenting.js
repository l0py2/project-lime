//priority: 9998

BrewinandchewinFermentingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'brewinandchewin:fermenting') {
		return null;
	}
	
	let recipe = new BrewinandchewinFermentingRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function BrewinandchewinFermentingRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	this.multipleInput = false;
	
	this.replaceInput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		if(this.multipleInput) {
			for(let i = 0; i < this.json.ingredients.length; i++) {
				if(UnifyJS.equalIngredients(this.json.ingredients[i], originalObject)) {
					UnifyJS.replaceIngredient(this.json.ingredients[i], replacementObject);
					this.modified = true;
				}
			}
		} else {
			if(UnifyJS.equalIngredients(this.json.ingredients, originalObject)) {
				UnifyJS.replaceIngredient(this.json.ingredients, replacementObject);
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

UnifyJS.recipeTypes.push(BrewinandchewinFermentingRecipe);