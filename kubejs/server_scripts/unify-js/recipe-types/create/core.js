//priority: 999

function Create() {}

Create.genericToJson = (inputs, outputs) => {
	return {
		ingredients: Create.inputsToIngredients(Array.isArray(inputs) ? inputs : [inputs]),
		results: Create.outputsToResults(Array.isArray(outputs) ? outputs : [outputs])
	};
};

Create.genericRelaceInput = (recipe, original, replacement) => {
	const originalObject = UnifyJS.ingredientStringToObject(original);
	const replacementObject = UnifyJS.ingredientStringToObject(replacement);
	
	for(let i = 0; i < recipe.json.ingredients.length; i++) {
		if(UnifyJS.equalIngredients(recipe.json.ingredients[i], originalObject)) {
			UnifyJS.replaceIngredient(recipe.json.ingredients[i], replacementObject);
			recipe.modified = true;
		}
	}
};

Create.genericReplaceOutput = (recipe, original, replacement) => {
	const originalObject = UnifyJS.ingredientStringToResultObject(original);
	const replacementObject = UnifyJS.ingredientStringToResultObject(replacement);
	
	for(let i = 0; i < recipe.json.results.length; i++) {
		if(UnifyJS.equalIngredients(recipe.json.results[i], originalObject)) {
			UnifyJS.replaceIngredient(recipe.json.results[i], replacementObject);
			recipe.modified = true;
		}
	}
};

Create.genericRemoveOutput = (recipe, removedItem) => {
	const removedItemObject = UnifyJS.ingredientStringToResultObject(removedItem);
	
	let indexToRemove;
	
	do {
		indexToRemove = -1;
			
		for(let i = 0; i < recipe.json.results.length; i++) {
			if(UnifyJS.equalIngredients(recipe.json.results[i], removedItemObject)) {
				indexToRemove = i;
				break;
			}
		}
			
		if(indexToRemove != -1) {
			recipe.json.results.splice(indexToRemove, 1);
			recipe.modified = true;
		}
	} while(indexToRemove != -1);
		
	if(recipe.json.results.length < 1) {
		recipe.empty = true;
	}
};

Create.inputToIngredient = (input) => {
	if(typeof input == 'string') {
		return Ingredient.of(input).toJson();
	} else if(input instanceof Fluid) {
		return {
			type: 'fluid_stack',
			fluid: input.fluid,
			amount: input.amount
		};
	} else {
		return input.toJson();
	}
};

Create.inputsToIngredients = (inputs) => {
	const ingredients = [];
	
	for(const input of inputs) {
		ingredients.push(Create.inputToIngredient(input));
	}
	
	return ingredients;
};

Create.outputToResult = (output) => {
	let item;
	
	if(typeof output == 'string') {
		return Item.of(output).toJson();
	} else {
		return output.toJson();
	}
};

Create.outputsToResults = (outputs) => {
	const results = [];
	
	for(const output of outputs) {
		results.push(Create.outputToResult(output));
	}
	
	return results;
};