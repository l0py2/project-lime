//priority: 9998

MinecraftCampfireCookingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'minecraft:campfire_cooking') {
		return null;
	}
	
	let recipe = new MinecraftCampfireCookingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

function MinecraftCampfireCookingRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:void';
	this.json = {};
	this.multipleInput = false;
	
	this.replaceInput = (original, replacement) => {
		const originalObject = MiscJS.ingredientStringToObject(original);
		const replacementObject = MiscJS.ingredientStringToObject(replacement);
		
		if(this.multipleInput) {
			for(let i = 0; i < this.json.ingredient.length; i++) {
				if(MiscJS.equalIngredients(this.json.ingredient[i], originalObject)) {
					MiscJS.replaceIngredient(this.json.ingredient[i], replacementObject);
					this.modified = true;
				}
			}
		} else {
			if(MiscJS.equalIngredients(this.json.ingredient, originalObject)) {
				MiscJS.replaceIngredient(this.json.ingredient, replacementObject);
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

MiscJS.recipeTypes.push(MinecraftCampfireCookingRecipe);