ServerEvents.recipes(event => {	
	event.blasting('minecraft:leather', 'minecraft:rotten_flesh').xp(0.1);
	
	event.remove({ id: 'minecraft:chain' });
	event.remove({ id: 'create:crafting/appliances/chain_from_zinc' });
	event.shaped(
		'minecraft:chain',
		[
			' A ',
			' A ',
			' A '
		],
		{
			A: '#c:nuggets/iron'
		}
	);
	
	event.remove({ id: 'minecraft:lodestone' });
	event.shaped(
		'minecraft:lodestone',
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#minecraft:stone_bricks',
			B: '#c:ingots/iron'
		}
	);
});