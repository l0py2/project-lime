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
	event.recipes.create.mechanical_crafting(
		'create:netherite_backtank',
		[
			'     ',
			' CCC ',
			'BDADB',
			'BDDDB ',
			' BBB '
		],
		{
			A: 'create:copper_backtank',
			B: '#c:plates/obsidian',
			C: '#c:ingots/netherite',
			D: '#c:storage_blocks/steel'
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
});