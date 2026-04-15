//priority: 99

global.recipes.types = [];

function ingredientStringToObject(ingredientString) {
	return ingredientString.startsWith('#') ? { tag: ingredientString.slice(1) } : { item: ingredientString };
}

function equalIngredients(ingredient1, ingredient2) {
	return ingredient1.item == ingredient2.item
		&& ingredient1.tag == ingredient2.tag;
}

function replaceIngredient(original, replacement) {
	if(replacement.item != undefined) {
		original.item = replacement.item;
		delete original.tag;
	} else {
		original.tag = replacement.tag;
		delete original.item;
	}
}