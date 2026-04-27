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
	
	CreateMixingRecipe.custom(event, ['#c:stones', '#c:ingots/zinc'], Item.of('create:andesite_alloy', 16), 'heated');
	CreateMixingRecipe.custom(event, ['#c:stones', '#c:ingots/zinc'], Item.of('create:andesite_alloy', 32), 'superheated');	
	
	event.remove({ id: 'create:sequenced_assembly/sturdy_sheet' });
	/*
	starting item = '#c:plates/steel'
	
	1st filling lava
	2nd deploying = '#c:plates/steel'
	3rd deploying = '#c:dusts/obsidian'
	4th sawing
	5th pressing
	
	repeat 2 times 90%
	
	final item = 'create:sturdy_sheet'
	*/
	
	event.remove({ id: 'create:crafting/materials/rose_quartz' });
	CreateMixingRecipe.custom(event, ['minecraft:quartz', 'minecraft:redstone'], Item.of('create:rose_quartz'), 'heated');
});