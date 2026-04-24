//priority: 998

CreateMillingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:milling') {
		return null;
	}
	
	let recipe = new CreateMillingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateMillingRecipe.toJson = (event, inputs, outputs, processingTime) => {
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:milling';
	recipe.processingTime = processingTime != undefined ? processingTime : 100;
	
	return recipe;
};

CreateMillingRecipe.custom = (event, inputs, outputs, processingTime) => {
	event.custom(CreateMillingRecipe.toJson(inputs, outputs, processingTime));
};

function CreateMillingRecipe() {
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

UnifyJS.recipeTypes.push(CreateMillingRecipe);