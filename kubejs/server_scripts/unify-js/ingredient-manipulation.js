//priority: 999

UnifyJS.ingredientStringToObject = (ingredientString) => {
	return ingredientString.startsWith('#') ? { tag: ingredientString.slice(1) } : { item: ingredientString };
};

UnifyJS.ingredientStringToResultObject = (ingredientString) => {
	return ingredientString.startsWith('#') ? { tag: ingredientString.slice(1) } : { id: ingredientString };
};

UnifyJS.equalIngredients = (ingredient1, ingredient2) => {
	return ingredient1.id == ingredient2.id
		&& ingredient1.item == ingredient2.item
		&& ingredient1.tag == ingredient2.tag;
};

UnifyJS.replaceIngredient = (original, replacement) => {
	if(replacement.id != undefined) {
		original.id = replacement.id;
		delete original.item;
		delete original.tag;
	} else if(replacement.item != undefined) {
		original.item = replacement.item;
		delete original.id;
		delete original.tag;
	} else if(replacement.tag != undefined) {
		original.tag = replacement.tag;
		delete original.id;
		delete original.item;
	}
};