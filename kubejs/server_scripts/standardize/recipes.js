ServerEvents.recipes(event => {
	function removeRecipes() {
		for(const filter of global.removedRecipes) {
			event.remove(filter);
		}
	}
	
	function replaceInputs() {
		for(const [original, replacement] of global.inputReplacements) {
			event.replaceInput(
				{ input: original },
				original,
				replacement
			);
		}
		
		const recipes = global.recipes.getAll(event, {}, true);
		const modifiedRecipes = new Map();
		
		const commonProperties = [
			'ingredient',
			'ingredients',
			'input',
			'inputs'
		];
		
		for(const [original, replacement] of global.inputReplacements) {
			const replacementIsTag = replacement.startsWith('#');
			
			for(const recipe of recipes) {
				for(const property of commonProperties) {
					if(recipe[property] == undefined) {
						continue;
					}
					
					if(typeof recipe[property] == 'string' && original == recipe[property]) {
						if(replacementIsTag) {
							recipe[property] = { tag: replacement.slice(1) };
						} else {
							recipe[property] = replacement;
						}
						
						modifiedRecipes.set(recipe.id, recipe);
					} else if(Array.isArray(recipe[property])) {
						let tagIndex;
							
						do {
							tagIndex = -1;
							let complex = false;
							
							for(let i = 0; i < recipe[property].length; i++) {
								if(typeof recipe[property][i] == 'string' && original == recipe[property][i]) {
									tagIndex = i;
									break;
								} else if(typeof recipe[property][i] == 'object' && recipe[property][i].hasOwnProperty('item') && original == recipe[property][i].item) {
									tagIndex = i;
									complex = true;
									break;
								}
							}
								
							if(tagIndex != -1) {
								if(complex) {
									if(replacementIsTag) {
										delete recipe[property][tagIndex].item;
										recipe[property][tagIndex].tag = replacement.slice(1);
									} else {
										recipe[property][tagIndex].item = replacement;
									}
								} else {
									if(replacementIsTag) {
										recipe[property][tagIndex] = { tag: replacement.slice(1) };
									} else {
										recipe[property][tagIndex] = replacement;
									}
								}
								
								modifiedRecipes.set(recipe.id, recipe);
							}
						} while(tagIndex != -1);
					} else if(typeof recipe[property] == 'object' && recipe[property].hasOwnProperty('item') && original == recipe[property].item) {
						if(replacementIsTag) {
							delete recipe[property].item;
							recipe[property].tag = replacement.slice(1);
						} else {
							recipe[property].item = replacement;
						}
						
						modifiedRecipes.set(recipe.id, recipe);
					}
				}
			}
		}

		for(const [recipeId, recipe] of modifiedRecipes) {
			event.remove({ id: recipeId });
			event.custom(recipe).id(recipeId);
		}
	}
	
	function replaceOutputs() {
		for(const [original, replacement] of global.inputReplacements) {
			event.replaceOutput(
				{ input: original },
				original,
				replacement
			);
		}
		
		const recipes = global.recipes.getAll(event, {}, true);
		const modifiedRecipes = new Map();
		
		const commonProperties = [
			'result',
			'results',
			'output',
			'outputs'
		];
		
		for(const [original, replacement] of global.inputReplacements) {
			const replacementIsTag = replacement.startsWith('#');
			
			for(const recipe of recipes) {
				for(const property of commonProperties) {
					if(recipe[property] == undefined) {
						continue;
					}
					
					if(typeof recipe[property] == 'string' && original == recipe[property]) {
						if(replacementIsTag) {
							recipe[property] = { tag: replacement.slice(1) };
						} else {
							recipe[property] = replacement;
						}
						
						modifiedRecipes.set(recipe.id, recipe);
					} else if(Array.isArray(recipe[property])) {
						let tagIndex;
							
						do {
							tagIndex = -1;
							let complex = false;
							
							for(let i = 0; i < recipe[property].length; i++) {
								if(typeof recipe[property][i] == 'string' && original == recipe[property][i]) {
									tagIndex = i;
									break;
								} else if(typeof recipe[property][i] == 'object' && recipe[property][i].hasOwnProperty('item') && original == recipe[property][i].item) {
									tagIndex = i;
									complex = true;
									break;
								}
							}
								
							if(tagIndex != -1) {
								if(complex) {
									if(replacementIsTag) {
										delete recipe[property][tagIndex].item;
										recipe[property][tagIndex].tag = replacement.slice(1);
									} else {
										recipe[property][tagIndex].item = replacement;
									}
								} else {
									if(replacementIsTag) {
										recipe[property][tagIndex] = { tag: replacement.slice(1) };
									} else {
										recipe[property][tagIndex] = replacement;
									}
								}
								
								modifiedRecipes.set(recipe.id, recipe);
							}
						} while(tagIndex != -1);
					} else if(typeof recipe[property] == 'object' && recipe[property].hasOwnProperty('item') && original == recipe[property].item) {
						if(replacementIsTag) {
							delete recipe[property].item;
							recipe[property].tag = replacement.slice(1);
						} else {
							recipe[property].item = replacement;
						}
						
						modifiedRecipes.set(recipe.id, recipe);
					}
				}
			}
		}

		for(const [recipeId, recipe] of modifiedRecipes) {
			event.remove({ id: recipeId });
			event.custom(recipe).id(recipeId);
		}
	}

	function replaceItemTags() {
		const recipes = global.recipes.getAll(event, {}, true);
		const modifiedRecipes = new Map();
		
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

		for(const [recipeId, recipe] of modifiedRecipes) {
			event.remove({ id: recipeId });
			event.custom(recipe).id(recipeId);
		}
	}

	function removeItems() {
		const recipes = global.recipes.getAll(event, {}, true);
		const removedRecipes = new Set();
		const modifiedRecipes = new Map();
		
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

		for(const recipe of removedRecipes) {
			modifiedRecipes.delete(recipe);
			event.remove({ id: recipe });
		}
		
		for(const [recipeId, recipe] of modifiedRecipes) {
			event.remove({ id: recipeId });
			event.custom(recipe).id(recipeId);
		}
		
		event.remove({ output: global.tag.KJ('removed') });
	}

	removeRecipes();
	replaceInputs();
	replaceOutputs();
	replaceItemTags();
	removeItems();
});