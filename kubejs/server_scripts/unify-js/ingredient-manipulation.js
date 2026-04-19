//priority: 999

UnifyJS.ingredientStringToObject = (ingredientString) => {
	return ingredientString.startsWith('#') ? { tag: ingredientString.slice(1) } : { item: ingredientString };
};

UnifyJS.ingredientStringToResultObject = (ingredientString) => {
	return { id: ingredientString };
};

UnifyJS.equalIngredients = (ingredient1, ingredient2) => {	
	return (ingredient1.id != undefined && ingredient1.id == ingredient2.id)
		|| (ingredient1.item != undefined && ingredient1.item == ingredient2.item)
		|| (ingredient1.tag != undefined && ingredient1.tag == ingredient2.tag);
};

UnifyJS.replaceIngredient = (original, replacement) => {
	if(original.id != undefined) {
		original.id = replacement.id;
		delete original.item;
		delete original.tag;
	} else if(original.item != undefined) {
		original.item = replacement.item;
		delete original.id;
		delete original.tag;
	} else if(original.tag != undefined) {
		original.tag = replacement.tag;
		delete original.id;
		delete original.item;
	}
};