//priority: 9998

MinecraftSmokingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'minecraft:smoking') {
		return null;
	}
		
	let recipe = new MinecraftSmokingRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function MinecraftSmokingRecipe() {
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
		if(this.json.result == original) {
			this.json.result = replacement;
			this.modified = true;
		}
	};
	
	this.removeOutput = (removedItem) => {
		if(this.json.result == removedItem) {
			this.empty = true;
		}
	};
	
	this.toJson = () => {
		return this.json;
	};
}

UnifyJS.recipeTypes.push(MinecraftSmokingRecipe);