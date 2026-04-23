//priority: 998

CreateSplashingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:splashing') {
		return null;
	}
		
	let recipe = new CreateSplashingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function CreateSplashingRecipe() {
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
		const originalObject = UnifyJS.ingredientStringToResultObject(original);
		const replacementObject = UnifyJS.ingredientStringToResultObject(replacement);
		
		for(let i = 0; i < this.json.results.length; i++) {
			if(UnifyJS.equalIngredients(this.json.results[i], originalObject)) {
				UnifyJS.replaceIngredient(this.json.results[i], replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = UnifyJS.ingredientStringToResultObject(removedItem);
		
		let indexToRemove;
		
		do {
			indexToRemove = -1;
			
			for(let i = 0; i < this.json.results.length; i++) {
				if(UnifyJS.equalIngredients(this.json.results[i], removedItemObject)) {
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
	
	this.toJson = () => {
		return this.json;
	};
}

UnifyJS.recipeTypes.push(CreateSplashingRecipe);