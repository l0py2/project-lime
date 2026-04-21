ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/appliances/copper_diving_helmet' });
	event.shaped(
		'create:copper_diving_helmet',
		[
			'AAA',
			'ABA'
		],
		{
			A: '#c:plates/copper',
			B: '#c:glass_blocks/tinted'
		}
	);
	
	event.remove({ id: 'create:crafting/appliances/copper_diving_boots' });
	event.shaped(
		'create:copper_diving_boots',
		[
			'A A',
			'A A',
			'B B'
		],
		{
			A: '#c:plates/copper',
			B: 'create:andesite_alloy'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/goggles' });
	event.shaped(
		'create:goggles',
		[
			' C ',
			'ABA'
		],
		{
			A: '#c:glass_blocks',
			B: '#c:plates/gold',
			C: '#c:leathers'
		}
	);
	
	event.remove({ id: 'create:crafting/appliances/copper_backtank' });
	event.shaped(
		'create:copper_backtank',
		[
			'DCD',
			'BAB',
			' B '
		],
		{
			A: '#c:storage_blocks/copper',
			B: '#c:plates/copper',
			C: 'create:shaft',
			D: 'create:andesite_alloy'
		}
	);
	
	event.remove({ id: 'create:crafting/appliances/netherite_backtank_from_netherite' });
	event.remove({ id: 'create:crafting/appliances/netherite_backtank' });
	CreateMechanicalCraftingRecipe.custom(
		event, 
		[
			'BCB',
			'BAB',
			'BDB',
			' B '
		], 
		{
			A: Ingredient.of('create:copper_backtank'),
			B: Ingredient.of('#c:plates/obsidian'),
			C: Ingredient.of('#c:ingots/netherite'),
			D: Ingredient.of('#c:storage_blocks/steel')
		},
		Item.of('create:netherite_backtank')
	);

	
	event.remove({ id: 'create:crafting/appliances/netherite_diving_helmet_from_netherite' });
	event.remove({ id: 'create:crafting/appliances/netherite_diving_helmet' });
	CreateMechanicalCraftingRecipe.custom(
		event,
		[
			'BCB',
			'BAB',
			'DED'
		],
		{
			A: Ingredient.of('create:copper_diving_helmet'),
			B: Ingredient.of('#c:plates/obsidian'),
			C: Ingredient.of('#c:ingots/netherite'),
			D: Ingredient.of('#c:storage_blocks/steel'),
			E: Ingredient.of('#c:glass_blocks/tinted')
		},
		Item.of('create:netherite_diving_helmet')
	);
	
	event.remove({ id: 'create:crafting/appliances/netherite_diving_boots_from_netherite' });
	event.remove({ id: 'create:crafting/appliances/netherite_diving_boots' });
	CreateMechanicalCraftingRecipe.custom(
		event,
		[
			'BCB',
			'BAB',
			'D D'
		],
		{
			A: Ingredient.of('create:copper_diving_boots'),
			B: Ingredient.of('#c:plates/obsidian'),
			C: Ingredient.of('#c:ingots/netherite'),
			D: Ingredient.of('#c:storage_blocks/steel')
		},
		Item.of('create:netherite_diving_boots')
	);
});