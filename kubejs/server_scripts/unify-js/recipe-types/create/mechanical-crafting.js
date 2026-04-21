//priority: 998

CreateMechanicalCraftingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:mechanical_crafting') {
		return null;
	}
	
	let recipe = new CreateMechanicalCraftingRecipe();
	
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

CreateMechanicalCraftingRecipe.custom = (event, pattern, ingredientKeys, output, acceptMirrored) => {
	let key = {};
	
	for(const ingredientKey in ingredientKeys) {
		key[ingredientKey] = ingredientKeys[ingredientKey].toJson();
	}
	
	event.custom({
		type: 'create:mechanical_crafting',
		category: 'misc',
		show_notification: true,
		pattern: pattern,
		key: key,
		result: output.toJson(),
		accept_mirrored: acceptMirrored != undefined ? acceptMirrored : false
	});
};

function CreateMechanicalCraftingRecipe() {
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

UnifyJS.recipeTypes.push(CreateMechanicalCraftingRecipe);