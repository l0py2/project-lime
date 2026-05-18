//packmode: hard

ServerEvents.recipes(event => {
	potato.recipes.applyEvent(event);
	
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
	
	potato.event.create_mixing(['#c:stones', '#c:ingots/zinc'], Item.of('create:andesite_alloy', 16), 'heated');
	potato.event.create_mixing(['#c:stones', '#c:ingots/zinc'], Item.of('create:andesite_alloy', 32), 'superheated');
	
	event.remove({ id: 'create:sequenced_assembly/sturdy_sheet' });
	potato.event.create_sequenced_assembly(
		'#c:plates/steel',
		[
			potato.event.raw_create_deploying(['kubejs:steel_sheet', '#c:dusts/obsidian'], 'kubejs:steel_sheet'),
			potato.event.raw_create_filling(['kubejs:steel_sheet', CreateFluid.of('minecraft:lava', 100)], 'kubejs:steel_sheet'),
			potato.event.raw_create_pressing('kubejs:steel_sheet', 'kubejs:steel_sheet'),
			potato.event.raw_create_deploying(['kubejs:steel_sheet', '#c:plates/steel'], 'kubejs:steel_sheet'),
			potato.event.raw_create_cutting('kubejs:steel_sheet', 'kubejs:steel_sheet', 200)
		],
		2,
		[
			CreateItem.of('create:sturdy_sheet', 90),
			CreateItem.of('kubejs:steel_nugget', 10)
		],
		'kubejs:steel_sheet'
	);
	
	event.remove({ id: 'create:crafting/materials/rose_quartz' });
	potato.event.create_mixing(['minecraft:quartz', 'minecraft:redstone'], 'create:rose_quartz', 'heated');
});