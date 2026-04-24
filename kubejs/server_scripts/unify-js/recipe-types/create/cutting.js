//priority: 998

CreateCuttingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:cutting') {
		return null;
	}
		
	let recipe = new CreateCuttingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateCuttingRecipe.toJson = (inputs, outputs, processingTime) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:cutting';
	recipe.processingTime = processingTime != undefined ? processingTime : 100;
	
	return recipe;
};

CreateCuttingRecipe.custom = (event, inputs, outputs, processingTime) => {
	event.custom(CreateCuttingRecipe.toJson(inputs, outputs, processingTime));
};

function CreateCuttingRecipe() {
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

UnifyJS.recipeTypes.push(CreateCuttingRecipe);