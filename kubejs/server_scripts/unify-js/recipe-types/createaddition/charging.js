//priority: 9998

CreateadditionChargingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'createaddition:charging') {
		return null;
	}
		
	let recipe = new CreateadditionChargingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function CreateadditionChargingRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		if(UnifyJS.equalIngredients(this.json.input, originalObject)) {
			UnifyJS.replaceIngredient(this.json.input, replacementObject);
			this.modified = true;
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		if(UnifyJS.equalIngredients(this.json.result, originalObject)) {
			UnifyJS.replaceIngredient(this.json.result, replacementObject);
			this.modified = true;
		}
	};
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = UnifyJS.ingredientStringToObject(removedItem);
		
		if(UnifyJS.equalIngredients(this.json.result, removedItemObject)) {
			this.empty = true;
		}
	};
	
	this.toJson = () => {
		return this.json;
	};
}

UnifyJS.recipeTypes.push(CreateadditionChargingRecipe);