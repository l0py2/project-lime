//priority: 9998

CreateShapedRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:mechanical_crafting') {
		return null;
	}
	
	let recipe = new CreateShapedRecipe();
	
	recipe.json = rawRecipe;
	
	for(const key in recipe.json.key) {
		if(Array.isArray(recipe.json.key[key])) {
			recipe.multipleInputByKey.set(key, true);
		} else {
			recipe.multipleInputByKey.set(key, false);
		}
	}
	
	return recipe;
}

function CreateShapedRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	this.multipleInputByKey = new Map();
	
	this.replaceInput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		for(const [key, multipleInput] of this.multipleInputByKey) {
			if(multipleInput) {
				for(let i = 0; i < this.json.key[key].length; i++) {
					if(MiscJS.equalIngredients(this.json.key[key][i], originalObject)) {
						MiscJS.replaceIngredient(this.json.key[key][i], replacementObject);
						this.modified = true;
					}
				}
			} else {
				if(MiscJS.equalIngredients(this.json.key[key], originalObject)) {
					MiscJS.replaceIngredient(this.json.key[key], replacementObject);
					this.modified = true;
				}
			}
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

MiscJS.recipeTypes.push(CreateShapedRecipe);