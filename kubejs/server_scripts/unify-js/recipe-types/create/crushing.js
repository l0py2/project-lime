//priority: 998

CreateCrushingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:crushing') {
		return null;
	}
		
	let recipe = new CreateCrushingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateCrushingRecipe.toJson = (event, inputs, outputs, processingTime) => {
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:crushing';
	recipe.processingTime = processingTime != undefined ? processingTime : 100;
	
	return recipe;
};

CreateCrushingRecipe.custom = (event, inputs, outputs, processingTime) => {
	event.custom(CreateCrushingRecipe.toJson(inputs, outputs, processingTime));
};

function CreateCrushingRecipe() {
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

UnifyJS.recipeTypes.push(CreateCrushingRecipe);