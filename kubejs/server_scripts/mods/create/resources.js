ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/materials/andesite_alloy' });
	event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' });
	event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' });
	event.remove({ id: 'create:mixing/andesite_alloy' });
	event.shapeless(
		Item.of('create:andesite_alloy', 8),
		[
			'#c:stones',
			'#c:ingots/zinc'
		],
	);
	
	CreateMixingRecipe.custom(event, [Ingredient.of('#c:stones'), Ingredient.of('#c:ingots/zinc')], [Item.of('create:andesite_alloy', 16)], 'heated');
	CreateMixingRecipe.custom(event, [Ingredient.of('#c:stones'), Ingredient.of('#c:ingots/zinc')], [Item.of('create:andesite_alloy', 32)], 'superheated');
	
	
});