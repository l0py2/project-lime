//priority: 9998

FarmersdelightCuttingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'farmersdelight:cutting') {
		return null;
	}
		
	let recipe = new FarmersdelightCuttingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function FarmersdelightCuttingRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		for(let i = 0; i < this.json.ingredients.length; i++) {
			if(UnifyJS.equalIngredients(this.json.ingredients[i], originalObject)) {
				UnifyJS.replaceIngredient(this.json.ingredients[i], replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		for(let i = 0; i < this.json.result.length; i++) {
			if(UnifyJS.equalIngredients(this.json.result[i], originalObject)) {
				UnifyJS.replaceIngredient(this.json.result[i], replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = UnifyJS.ingredientStringToObject(removedItem);
		
		let indexToRemove;
		
		do {
			indexToRemove = -1;
			
			for(let i = 0; i < this.json.result.length; i++) {
				if(UnifyJS.equalIngredients(this.json.result[i], removedItemObject)) {
					indexToRemove = i;
					break;
				}
			}
			
			if(indexToRemove != -1) {
				this.json.result.splice(indexToRemove, 1);
				this.modified = true;
			}
		} while(indexToRemove != -1);
		
		if(this.json.result.length < 1) {
			this.empty = true;
		}
	};
	
	this.toJson = () => {
		return this.json;
	};
}

UnifyJS.recipeTypes.push(FarmersdelightCuttingRecipe);