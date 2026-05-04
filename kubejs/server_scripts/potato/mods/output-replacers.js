//priority: 1008

potato.recipes.outputReplacers.push((recipe, original, replacement) => {
	if(recipe.results == undefined) {
		return potato.recipes.status.UNMODIFIED;
	}
	
	if(!Array.isArray(recipe.results)) {
		return potato.recipes.status.UNMODIFIED;
	}
	
	const deleteMode = replacement == 'minecraft:air';
	
	if(deleteMode) {
		let originalResultCount = recipe.results.length;
		
		recipe.results = recipe.results.filter(result => {
			return result.id != original;
		});
		
		if(recipe.results.length == 0) {
			return potato.recipes.status.DELETED;
		} else if(originalResultCount != recipe.results.length) {
			return potato.recipes.status.MODIFIED;
		} else {
			return potato.recipes.status.UNMODIFIED;
		}
	} else {
		let modified = false;
		
		recipe.results = recipe.results.map(result => {
			if(result.id == original) {
				modified = true;
				result.id = replacement;
			}
			
			return result;
		});
		
		if(modified) {
			return potato.recipes.status.MODIFIED;
		} else {
			return potato.recipes.status.UNMODIFIED;
		}
	}
});

potato.recipes.outputReplacers.push((recipe, original, replacement) => {
	if(recipe.result == undefined) {
		return potato.recipes.status.UNMODIFIED;
	}
	
	if(Array.isArray(recipe.result)) {
		return potato.recipes.status.UNMODIFIED;
	}
	
	const deleteMode = replacement == 'minecraft:air';
	
	if(deleteMode) {
		if(recipe.result.id == original) {
			return potato.recipes.status.DELETED;
		} else {
			return potato.recipes.status.UNMODIFIED;
		}
	} else {
		if(recipe.result.id == original) {
			recipe.result.id = replacement;
			return potato.recipes.status.MODIFIED;
		} else {
			return potato.recipes.status.UNMODIFIED;
		}
	}
});