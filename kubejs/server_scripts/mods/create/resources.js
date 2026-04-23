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
	
	event.recipes.create.mixing(Item.of('create:andesite_alloy', 16), ['#c:stones', '#c:ingots/zinc']).heated();
	event.recipes.create.mixing(Item.of('create:andesite_alloy', 32), ['#c:stones', '#c:ingots/zinc']).superheated();	
});