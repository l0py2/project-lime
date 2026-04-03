ServerEvents.recipes(event => {
	for(const filter of global.removedRecipes) {
		event.remove(filter);
	}

	for(const [original, replacement] of global.inputReplacements) {
		event.replaceInput(
			{ input: original },
			original,
			replacement
		);
	}

	for(const [original, replacement] of global.outputReplacements) {
		event.replaceOutput(
			{ output: original },
			original,
			replacement
		);
	}
	
	const recipes = global.recipes.getAll(event, {}, true);
	const removedRecipes = new Set();
	const modifiedRecipes = new Map();
	
	const resultProperties = [
		'result',
		'results',
		'output',
		'outputs'
	];
	
	for(const recipe of recipes) {
		for(const item of global.removedItems) {
			for(const resultProperty of resultProperties) {
				if(recipe[resultProperty] != undefined) {
					if(typeof recipe[resultProperty] == 'string' && item == recipe[resultProperty]) {
						removedRecipes.add(recipe.id);
					} else if(Array.isArray(recipe[resultProperty])) {
						let removedItemResultIndex;
						
						do {
							removedItemResultIndex = -1;
						
							for(let i = 0; i < recipe[resultProperty].length; i++) {
								if(typeof recipe[resultProperty][i] == 'string' && item == recipe[resultProperty][i]) {
									removedItemResultIndex = i;
									break;
								} else if(recipe[resultProperty][i].item != undefined && item == recipe[resultProperty][i].item) {
									removedItemResultIndex = i;
									break;
								}
							}
							
							if(removedItemResultIndex != -1) {
								recipe[resultProperty].splice(removedItemResultIndex, 1);
								modifiedRecipes.set(recipe.id, recipe);
							}
							
							if(recipe[resultProperty].length == 0) {
								removedRecipes.add(recipe.id);
							}
						} while(removedItemResultIndex != -1);
					} else if(recipe[resultProperty].item != undefined && item == recipe[resultProperty].item) {
						removedRecipes.add(recipe.id);
					}
				}
			}
		}
	}

	for(const recipe of removedRecipes) {
		modifiedRecipes.delete(recipe);
		event.remove({ id: recipe });
	}
	
	for(const [recipeId, recipe] of modifiedRecipes) {
		event.remove({ id: recipeId });
		event.custom(recipe).id(recipeId);
	}
	
	event.replaceInput(
		{ input: global.tag.KJ('removed') },
		global.tag.KJ('removed'),
		global.id.MC('barrier')
	);
	
	event.remove({ output: global.tag.KJ('removed') });
});