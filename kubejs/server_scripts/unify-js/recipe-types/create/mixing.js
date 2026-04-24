//priority: 998

CreateMixingRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:mixing') {
		return null;
	}
		
	let recipe = new CreateMixingRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateMixingRecipe.toJson = (inputs, outputs, heat) => {
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:mixing';
	recipe.heat_requirement = heat;
	
	return recipe;
};

CreateMixingRecipe.custom = (event, inputs, outputs, heat) => {
	event.custom(CreateMixingRecipe.toJson(inputs, outputs, heat));
};

function CreateMixingRecipe() {
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

UnifyJS.recipeTypes.push(CreateMixingRecipe);