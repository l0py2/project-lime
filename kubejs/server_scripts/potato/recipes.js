//priority: 1009

potato.recipes = {
	recipeTypes: new Map(),
	status: {
		UNMODIFIED: 1,
		MODFIED: 2,
		DELETED: 3
	},
	outputReplacers: [],
	applyEvent: (event) => {
		potato.event = {};
		
		function addCustomRecipe(recipeType, recipeGenerator) {
			potato.event[recipeType] = function () {
				const args = [];
				Array.prototype.forEach.call(arguments, (argument, index) => {
					args.push(argument);
				});
				
				const recipe = recipeGenerator.apply(null, args);
				
				if(recipe == null) {
					console.error('Invalid recipe');
					return;
				}
				
				event.custom(recipe);
			};
		}
			
		function addRawCustomRecipe(recipeType, recipeGenerator) {
			potato.event[`raw_${recipeType}`] = function () {
				const args = [];
				Array.prototype.forEach.call(arguments, (argument, index) => {
					args.push(argument);
				});
				
				return recipeGenerator.apply(null, args);
			};
		}
		
		for(const [recipeType, recipeGenerator] of potato.recipes.recipeTypes) {
			console.log(`Adding ${recipeType} recipe type`);
			
			addCustomRecipe(recipeType, recipeGenerator);
			addRawCustomRecipe(recipeType, recipeGenerator);
		}
		
		potato.event.replaceOutput = (filter, original, replacement) => {
			event.forEachRecipe(filter, recipe => {
				let id = recipe.getId();
				let data = JSON.parse(recipe.json);
				
				for(const outputReplacer of potato.recipes.outputReplacers) {
					let recipeStatus = outputReplacer(data, original, replacement);
					
					if(recipeStatus == potato.recipes.status.MODIFIED) {
						event.custom(data).id(id);
						break;
					} else if(recipeStatus == potato.recipes.status.DELETED) {
						event.remove({ id: id });
						break;
					}
				}
			});
		};
	}
};