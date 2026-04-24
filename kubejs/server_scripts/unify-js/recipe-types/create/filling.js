//priority: 998

CreateFillingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:filling') {
		return null;
	}
		
	let recipe = new CreateFillingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateDeployingRecipe.toJson = (inputs, outputs) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:filling';
	
	return recipe;
};

CreateFillingRecipe.custom = (event, inputs, outputs) => {
	event.custom(CreateDeployingRecipe.toJson(inputs, outputs));
};

function CreateFillingRecipe() {
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

UnifyJS.recipeTypes.push(CreateFillingRecipe);