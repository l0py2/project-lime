ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/water_wheel' });
	event.shaped(
		'create:water_wheel',
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#minecraft:wooden_slabs',
			B: 'create:shaft',
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/large_water_wheel' });
	event.shaped(
		'create:large_water_wheel',
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#minecraft:wooden_slabs',
			B: 'create:water_wheel'
		}
	);
	
	event.remove({ id: 'create:crafting/kinetics/steam_engine' });
	/*
	starting item = shaft
	
	1st deploying = #c:storage_blocks/copper
	2nd deploying = #c:plates/obsidian
	3rd sawing
	4th deploying = create:electron_tube
	5th deploying = create:precision_mechanism
	6th deploying = steel block
	? 7th filling = lava ?
	
	repeat 3 times
	*/
	
});