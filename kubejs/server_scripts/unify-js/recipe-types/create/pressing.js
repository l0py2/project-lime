//priority: 998

CreatePressingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:pressing') {
		return null;
	}
		
	let recipe = new CreatePressingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreatePressingRecipe.toJson = (inputs, outputs) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:pressing';
	
	return recipe;
};

CreatePressingRecipe.custom = (event, inputs, outputs) => {
	event.custom(CreatePressingRecipe.toJson(inputs, outputs));
};

function CreatePressingRecipe() {
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

UnifyJS.recipeTypes.push(CreatePressingRecipe);