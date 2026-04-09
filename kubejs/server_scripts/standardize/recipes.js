function ingredientStringToObject(ingredientString) {
	return ingredientString.startsWith('#') ? { tag: ingredientString.slice(1) } : { item: ingredientString };
}

function equalIngredients(ingredient1, ingredient2) {
	return ingredient1.item == ingredient2.item
		&& ingredient1.tag == ingredient2.tag;
}

function replaceIngredient(original, replacement) {
	if(replacement.item != undefined) {
		original.item = replacement.item;
		delete original.tag;
	} else {
		original.tag = replacement.tag;
		delete original.item;
	}
}

SimpleRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.ingredient == undefined) {
		return null;
	}
		
	if(rawRecipe.result == undefined) {
		return null;
	}
			
	if(typeof rawRecipe.result != 'string') {
		return null;
	}
		
	let recipe = new SimpleRecipe();
	
	recipe.json = rawRecipe;
	
	if(Array.isArray(recipe.json.ingredient)) {
		recipe.multipleInput = true;
	}
		
	return recipe;
};

function SimpleRecipe() {
	this.modified = false;
	this.json = {};
	this.multipleInput = false;
	
	this.replaceInput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
		
		if(this.multipleInput) {
			for(let i = 0; i < this.json.ingredient.length; i++) {
				if(equalIngredients(this.json.ingredient[i], originalObject)) {
					replaceIngredient(this.json.ingredient[i], replacementObject);
					this.modified = true;
				}
			}
		} else {
			if(equalIngredients(this.json.ingredient, originalObject)) {
				replaceIngredient(this.json.ingredient, replacementObject);
				this.modified = true;
			}
		}
	};
	
	this.replaceOutput = (original, replacement) => {
		if(this.json.result == original) {
			this.json.resul = replacement;
			this.modified = true;
		}
	};
}

ShapedRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.key == undefined) {
		return null;
	}
	
	if(typeof rawRecipe.key != 'object') {
		return null;
	}
	
	if(rawRecipe.result == undefined) {
		return null;
	}
	
	if(typeof rawRecipe.result != 'object') {
		return null;
	}
	
	let recipe = new ShapedRecipe();
	
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

function ShapedRecipe() {
	this.modified = false;
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
}

ShapelessRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.ingredients == undefined) {
		return null;
	}
	
	if(!Array.isArray(rawRecipe.ingredients)) {
		return null;
	}
		
	if(rawRecipe.result == undefined) {
		return null;
	}
	
	if(typeof rawRecipe.result != 'object') {
		return null;
	}
		
	let recipe = new ShapelessRecipe();
	
	recipe.json = rawRecipe;
		
	return recipe;
};

function ShapelessRecipe() {
	this.modified = false;
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		const originalObject = ingredientStringToObject(original);
		const replacementObject = ingredientStringToObject(replacement);
				
		for(let i = 0; i < this.json.ingredients.length; i++) {
			if(Array.isArray(this.json.ingredients[i])) {
				for(let j = 0; j < this.json.ingredients[i].length; j++) {
					if(equalIngredients(this.json.ingredients[i][j], originalObject)) {
						replaceIngredient(this.json.ingredients[i][j], replacementObject);
						this.modified = true;
					}
				}
			} else {
				if(equalIngredients(this.json.ingredients[i], originalObject)) {
					replaceIngredient(this.json.ingredients[i], replacementObject);
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
}

ServerEvents.recipes(event => {
	for(const recipeFilter of global.removedRecipes) {
		event.remove(recipeFilter);
	}
	
	const rawRecipes = global.recipes.getAll(event, {}, true);
	
	const recipes = [];
	
	for(const rawRecipe of rawRecipes) {
		let recipe;
		
		if((recipe = SimpleRecipe.fromJson(rawRecipe)) != null) {
			recipes.push(recipe);
		} else if((recipe = ShapedRecipe.fromJson(rawRecipe)) != null) {
			recipes.push(recipe);
		} else if((recipe = ShapelessRecipe.fromJson(rawRecipe)) != null) {
			recipes.push(recipe);
		}
	}
	
	for(const recipe of recipes) {
		for(const [original, replacement] of global.inputReplacements) {
			recipe.replaceInput(original, replacement);
		}
		
		for(const [original, replacement] of global.outputReplacements) {
			recipe.replaceOutput(original, replacement);
		}
		
		for(const [original, replacement] of global.itemTagReplacements) {
			recipe.replaceInput(original, replacement);
		}
	}
	
	for(const recipe of recipes) {
		if(recipe.modified) {
			event.remove({ id: recipe.json.id });
			event.custom(recipe.json);
		}
	}
});