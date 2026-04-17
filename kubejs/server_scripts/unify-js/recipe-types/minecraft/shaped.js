//priority: 9998

MinecraftShapedRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'minecraft:crafting_shaped') {
		return null;
	}
	
	let recipe = new MinecraftShapedRecipe();
	
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

function MinecraftShapedRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	this.multipleInputByKey = new Map();
	
	this.replaceInput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
				
		for(const [key, multipleInput] of this.multipleInputByKey) {
			if(multipleInput) {
				for(let i = 0; i < this.json.key[key].length; i++) {
					if(UnifyJS.equalIngredients(this.json.key[key][i], originalObject)) {
						UnifyJS.replaceIngredient(this.json.key[key][i], replacementObject);
						this.modified = true;
					}
				}
			} else {
				if(UnifyJS.equalIngredients(this.json.key[key], originalObject)) {
					UnifyJS.replaceIngredient(this.json.key[key], replacementObject);
					this.modified = true;
				}
			}
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

UnifyJS.recipeTypes.push(MinecraftShapedRecipe);