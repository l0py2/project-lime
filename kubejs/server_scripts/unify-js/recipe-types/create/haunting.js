//priority: 998

CreateHauntingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:haunting') {
		return null;
	}
		
	let recipe = new CreateHauntingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateHauntingRecipe.toJson = (inputs, outputs) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:haunting';
	
	return recipe;
};

CreateHauntingRecipe.custom = (event, inputs, outputs) => {
	event.custom(CreateHauntingRecipe.toJson(inputs, outputs));
};

function CreateHauntingRecipe() {
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

UnifyJS.recipeTypes.push(CreateHauntingRecipe);