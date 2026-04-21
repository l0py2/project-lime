//priority: 998

CreateSequencedAssemblyRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:sequenced_assembly') {
		return null;
	}
	
	let recipe = new CreateSequencedAssemblyRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function CreateSequencedAssemblyRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		if(UnifyJS.equalIngredients(this.json.ingredient, originalObject)) {
			UnifyJS.replaceIngredient(this.json.ingredient, replacementObject);
			this.modified = true;
		}
		
		for(let sequence of this.json.sequence) {
			for(let ingredient of sequence.ingredients) {
				if(UnifyJS.equalIngredients(ingredient, originalObject)) {
					UnifyJS.replaceIngredient(ingredient, replacementObject);
					this.modified = true;
				}
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToResultObject(original);
		const replacementObject = UnifyJS.ingredientStringToResultObject(replacement);
		
		for(let result of this.json.results)  {
			if(UnifyJS.equalIngredients(result, originalObject)) {
				UnifyJS.replaceIngredient(result, replacementObject);
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

UnifyJS.recipeTypes.push(CreateSequencedAssemblyRecipe);