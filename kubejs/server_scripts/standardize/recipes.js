ServerEvents.recipes(event => {	
	function equalIngredients(ingredient1, ingredient2) {
		if(ingredient1 == ingredient2) {
			return true;
		}
		
		if(typeof ingredient1 == 'string') {
			ingredient1 = ingredient1.startsWith('#') ? { tag: ingredient1.slice(1) } : { item: ingredient1 };
		}
		
		if(typeof ingredient2 == 'string') {
			ingredient2 = ingredient2.startsWith('#') ? { tag: ingredient2.slice(1) } : { item: ingredient2 };
		}
		
		return ingredient1.item == ingredient2.item && ingredient1.tag == ingredient2.tag;
	}
	
	function replaceIngredient(ingredient, replacement) {
		const replacementIsTag = replacement.startsWith('#');
		
		if(typeof ingredient == 'string') {
			if(replacementIsTag) {
				ingredient = {
					tag: replacement.slice(1)
				};
			} else {
				ingredient = {
					item: replacement
				};
			}
		} else {
			if(replacementIsTag) {
				delete ingredient.item;
				ingredient.tag = replacement.slice(1);
			} else {
				ingredient.item = replacement;
			}
		}
	}
	
	function replaceInputSequencedAssembly(recipe, original, replacement) {
		if(recipe.sequence == undefined) {
			return false;
		}
		
		if(!Array.isArray(recipe.sequence)) {
			return false;
		}
		
		let modified = false;
		
		for(const recipeStep of recipe.sequence) {
			if(!Array.isArray(recipeStep.ingredients)) {
				continue;
			}
			
			for(const ingredient of recipeStep.ingredients) {
				if(equalIngredients(original, ingredient)) {
					replaceIngredient(ingredient, replacement);
					modified = true;
				}
			}
		}
		
		return modified;
	}
	
	function replaceInputGeneric(recipe, original, replacement) {		
		if(recipe.ingredient != undefined) {
			if(equalIngredients(original, recipe.ingredient)) {
				replaceIngredient(recipe.ingredient, replacement);
				return true;
			}
		}
		
		let modified = false;
		
		if(recipe.ingredients != undefined && Array.isArray(recipe.ingredients)) {
			for(const ingredient of recipe.ingredients) {
				if(equalIngredients(original, ingredient)) {
					replaceIngredient(ingredient, replacement);
					modified = true;
				}
			}
		}
		
		return modified;
	}
	
	function replaceOutputGeneric(recipe, original, replacement) {
		if(recipe.result != undefined) {
			if(equalIngredients(original, recipe.result)) {
				replaceIngredient(recipe.result, replacement);
				return true;
			}
		}
		
		let modified = false;
		
		if(recipe.results != undefined && Array.isArray(recipe.results)) {
			for(const ingredient of recipe.results) {
				if(equalIngredients(original, ingredient)) {
					replaceIngredient(ingredient, replacement);
					modified = true;
				}
			}
		}
		
		return modified;
	}
	
	function replaceItemTags(recipes, modifiedRecipes) {
		const commonProperties = [
			'result',
			'results',
			'output',
			'outputs',
			'ingredient',
			'ingredients',
			'input',
			'inputs'
		];
		
		for(const [original, replacement] of global.itemTagReplacements) {
			for(const recipe of recipes) {
				for(const property of commonProperties) {
					if(recipe[property] == undefined) {
						continue;
					}
					
					if(Array.isArray(recipe[property])) {
						let tagIndex;
							
						do {
							tagIndex = -1;
							
							for(let i = 0; i < recipe[property].length; i++) {
								if(typeof recipe[property][i] == 'object' && recipe[property][i].hasOwnProperty('tag') && original == recipe[property][i].tag) {
									tagIndex = i;
									break;
								}
							}
								
							if(tagIndex != -1) {
								recipe[property][tagIndex].tag = replacement;
								modifiedRecipes.set(recipe.id, recipe);
							}
						} while(tagIndex != -1);
					} else if(typeof recipe[property] == 'object' && recipe[property].hasOwnProperty('tag') && original == recipe[property].tag) {
						recipe[property].tag = replacement;
						modifiedRecipes.set(recipe.id, recipe);
					}
				}
			}
		}
	}

	function removeItems(recipes, removedRecipes, modifiedRecipes) {
		const commonProperties = [
			'result',
			'results',
			'output',
			'outputs'
		];
		
		for(const recipe of recipes) {
			for(const item of global.removedItems) {
				for(const property of commonProperties) {
					if(recipe[property] == undefined) {
						continue;
					}
					
					if(typeof recipe[property] == 'string' && item == recipe[property]) {
						removedRecipes.add(recipe.id);
					} else if(Array.isArray(recipe[property])) {
						let removedItemResultIndex;
							
						do {
							removedItemResultIndex = -1;
							
							for(let i = 0; i < recipe[property].length; i++) {
								if(typeof recipe[property][i] == 'string' && item == recipe[property][i]) {
									removedItemResultIndex = i;
									break;
								} else if(typeof recipe[property][i] == 'object' && recipe[property][i].hasOwnProperty('item') && item == recipe[property][i].item) {
									removedItemResultIndex = i;
									break;
								}
							}
								
							if(removedItemResultIndex != -1) {
								recipe[property].splice(removedItemResultIndex, 1);
								modifiedRecipes.set(recipe.id, recipe);
							}
								
							if(recipe[property].length == 0) {
								removedRecipes.add(recipe.id);
							}
						} while(removedItemResultIndex != -1);
					} else if(typeof recipe[property] == 'object' && recipe[property].hasOwnProperty('item') && item == recipe[property].item) {
						removedRecipes.add(recipe.id);
					}
				}
			}
		}
	}

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
	
	for(const [original, replacement] of global.inputReplacements) {
		event.replaceOutput(
			{ input: original },
			original,
			replacement
		);
	}

	const recipes = global.recipes.getAll(event, {}, true);
	const removedRecipes = new Set();
	const modifiedRecipes = new Map();

	for(const recipe of recipes) {
		for(const [original, replacement] of global.inputReplacements) {
			if(recipe.type == global.id.CR('sequenced_assembly')) {
				if(replaceInputSequencedAssembly(recipe, original, replacement)) {
					modifiedRecipes.set(recipe.id, recipe);
				}
			} else {
				if(replaceInputGeneric(recipe, original, replacement)) {
					modifiedRecipes.set(recipe.id, recipe);
				}
			}
		}
		
		for(const [original, replacement] of global.outputReplacements) {
			if(replaceOutputGeneric(recipe, original, replacement)) {
				modifiedRecipes.set(recipe.id, recipe);
			}
		}
	}
	
	replaceItemTags(recipes, modifiedRecipes);
	removeItems(recipes, removedRecipes, modifiedRecipes);
	
	for(const recipe of removedRecipes) {
		modifiedRecipes.delete(recipe);
		event.remove({ id: recipe });
	}
		
	for(const [recipeId, recipe] of modifiedRecipes) {
		event.remove({ id: recipeId });
		event.custom(recipe).id(recipeId);
	}
	
	event.remove({ output: global.tag.KJ('removed') });
});