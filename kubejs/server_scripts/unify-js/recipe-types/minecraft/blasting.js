//priority: 998

MinecraftBlastingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'minecraft:blasting') {
		return null;
	}
		
	let recipe = new MinecraftBlastingRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function MinecraftBlastingRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	this.multipleInput = false;
	
	this.replaceInput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToObject(original);
		const replacementObject = UnifyJS.ingredientStringToObject(replacement);
		
		if(this.multipleInput) {
			for(let i = 0; i < this.json.ingredient.length; i++) {
				if(UnifyJS.equalIngredients(this.json.ingredient[i], originalObject)) {
					UnifyJS.replaceIngredient(this.json.ingredient[i], replacementObject);
					this.modified = true;
				}
			}
		} else {
			if(UnifyJS.equalIngredients(this.json.ingredient, originalObject)) {
				UnifyJS.replaceIngredient(this.json.ingredient, replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		const originalObject = UnifyJS.ingredientStringToResultObject(original);
		const replacementObject = UnifyJS.ingredientStringToResultObject(replacement);
		
		if(UnifyJS.equalIngredients(this.json.result, originalObject)) {
			UnifyJS.replaceIngredient(this.json.result, replacementObject);
			this.modified = true;
		}
	};
	
	this.removeOutput = (removedItem) => {
		const removedItemObject = UnifyJS.ingredientStringToResultObject(removedItem);
		
		if(UnifyJS.equalIngredients(this.json.result, removedItemObject)) {
			this.empty = true;
		}
	};
	
	this.toJson = () => {
		return this.json;
	};
}

UnifyJS.recipeTypes.push(MinecraftBlastingRecipe);