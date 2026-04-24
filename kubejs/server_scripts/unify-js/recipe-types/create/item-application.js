//priority: 998

CreateItemApplicationRecipe.fromJson = (rawRecipe) => {
	if(rawRecipe.type != 'create:item_application') {
		return null;
	}
		
	let recipe = new CreateItemApplicationRecipe();
	
	recipe.json = rawRecipe;
	
	return recipe;
};

CreateItemApplicationRecipe.toJson = (inputs, outputs) => {	
	const recipe = Create.genericToJson(inputs, outputs);
	
	recipe.type = 'create:item_application';
	
	return recipe;
};

CreateItemApplicationRecipe.custom = (event, inputs, outputs) => {
	event.custom(CreateItemApplicationRecipe.toJson(inputs, outputs));
};

function CreateItemApplicationRecipe() {
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

UnifyJS.recipeTypes.push(CreateItemApplicationRecipe);