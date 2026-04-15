//priority: 98

MCShapedRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != global.id.MC('crafting_shaped')) {
		return null;
	}
	
	let recipe = new MCShapedRecipe();
	
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

function MCShapedRecipe() {
	this.modified = false;
	this.empty = false;
	this.json = {};
	this.multipleInputByKey = new Map();
	
	this.replaceInput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
				
		for(const [key, multipleInput] of this.multipleInputByKey) {
			if(multipleInput) {
				for(let i = 0; i < this.json.key[key].length; i++) {
					if(equalIngredients(this.json.key[key][i], originalObject)) {
						replaceIngredient(this.json.key[key][i], replacementObject);
						this.modified = true;
					}
				}
			} else {
				if(equalIngredients(this.json.key[key], originalObject)) {
					replaceIngredient(this.json.key[key], replacementObject);
					this.modified = true;
				}
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
		
		if(equalIngredients(this.json.result, originalObject)) {
			replaceIngredient(this.json.result, replacementObject);
			this.modified = true;
		}
	}
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = ingredientStringToObject(removedItem);
		
		if(equalIngredients(this.json.result, removedItemObject)) {
			this.empty = true;
		}
	}
}

global.recipes.types.push(MCShapedRecipe);