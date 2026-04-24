//priority: 998

CreateDeployingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:deploying') {
		return null;
	}
		
	let recipe = new CreateDeployingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateDeployingRecipe.toJson = (inputs, outputs, keepItem) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:deploying';
	recipe.keep_held_item = keepItem != undefined ? keepItem : false;
	
	return recipe;
};

CreateDeployingRecipe.custom = (event, inputs, outputs, keepItem) => {
	event.custom(CreateDeployingRecipe.toJson(inputs, outputs, keepItem));
};

function CreateDeployingRecipe() {
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

UnifyJS.recipeTypes.push(CreateDeployingRecipe);