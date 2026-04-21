//priority: 998

CreateHauntingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:haunting') {
		return null;
	}
		
	let recipe = new CreateHauntingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateHauntingRecipe.custom = (event, inputs, outputs) => {
	const ingredients = [];
	const results = [];
	
	for(const input of inputs) {
		ingredients.push(input.toJson());
	}
	
	for(const output of outputs) {
		results.push(output.toJson());
	}
	
	event.custom({
		type: 'create:haunting',
		ingredients: ingredients,
		results: results
	});
};

function CreateHauntingRecipe() {
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

UnifyJS.recipeTypes.push(CreateHauntingRecipe);