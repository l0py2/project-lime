//priority: 998

CreateSandpaperPolishingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:sandpaper_polishing') {
		return null;
	}
		
	let recipe = new CreateSandpaperPolishingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateSandpaperPolishingRecipe.toJson = (inputs, outputs) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:sandpaper_polishing';
	
	return recipe;
};

CreateSandpaperPolishingRecipe.custom = (event, inputs, outputs) => {
	event.custom(CreateSandpaperPolishingRecipe.toJson(inputs, outputs));
};

function CreateSandpaperPolishingRecipe() {
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

UnifyJS.recipeTypes.push(CreateSandpaperPolishingRecipe);