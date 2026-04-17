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
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(MiscJS.equalIngredients(this.json.input, originalObject)) {
			MiscJS.replaceIngredient(this.json.input, replacementObject);
			this.modified = true;
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(MiscJS.equalIngredients(this.json.result, originalObject)) {
			MiscJS.replaceIngredient(this.json.result, replacementObject);
			this.modified = true;
		}
	};
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = MiscJS.ingredientStringToObject(removedItem);
		
		if(MiscJS.equalIngredients(this.json.result, removedItemObject)) {
			this.empty = true;
		}
	};
	
	this.toJson = () => {
		return this.json;
	};
}

MiscJS.recipeTypes.push(CreateadditionChargingRecipe);