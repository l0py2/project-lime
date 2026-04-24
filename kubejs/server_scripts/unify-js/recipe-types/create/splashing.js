//priority: 998

CreateSplashingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:splashing') {
		return null;
	}
		
	let recipe = new CreateSplashingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateSplashingRecipe.toJson = (inputs, outputs) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:splashing';
	
	return recipe;
};

CreateSplashingRecipe.custom = (event, inputs, outputs) => {
	event.custom(CreateSplashingRecipe.toJson(inputs, outputs));
};

function CreateSplashingRecipe() {
	this.modified = false;
	this.empty = false;
	
	this.id = 'minecraft:air';
	this.json = {};
	
	this.replaceInput = (original, replacement) => {
		Create.genericRelaceInput(this, original, replacement);
	};
	
	this.replaceOutput = (original, replacement) => {
		Create.genericReplaceOutput(this, original, replacement);
	};
	
	this.removeOutput = (removedItem) => {
		Create.genericRemoveOutput(this, removedItem);
	};
	
	this.toJson = () => {
		return this.json;
	};
}

UnifyJS.recipeTypes.push(CreateSplashingRecipe);