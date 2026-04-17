//priority: 9998

MinecraftShapelessRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'minecraft:crafting_shapeless') {
		return null;
	}
	
	let recipe = new MinecraftShapelessRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function MinecraftShapelessRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		for(let i = 0; i < this.json.ingredients.length; i++) {
			if(Array.isArray(this.json.ingredients[i])) {
				for(let j = 0; j < this.json.ingredients[i].length; j++) {
					if(UnifyJS.equalIngredients(this.json.ingredients[i][j], originalObject)) {
						UnifyJS.replaceIngredient(this.json.ingredients[i][j], replacementObject);
						this.modified = true;
					}
				}
			} else {
				if(UnifyJS.equalIngredients(this.json.ingredients[i], originalObject)) {
					UnifyJS.replaceIngredient(this.json.ingredients[i], replacementObject);
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

UnifyJS.recipeTypes.push(MinecraftShapelessRecipe);