//priority: 998

CreateCompactingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:compacting') {
		return null;
	}
	
	let recipe = new CreateCompactingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateCompactingRecipe.toJson = (inputs, outputs, heat) => {
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:compacting';
	recipe.heat_requirement = heat;
	
	return recipe;
};

CreateCompactingRecipe.custom = (event, inputs, outputs, heat) => {
	event.custom(CreateCompactingRecipe.toJson(inputs, outputs, heat));
};

function CreateCompactingRecipe() {
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

UnifyJS.recipeTypes.push(CreateCompactingRecipe);