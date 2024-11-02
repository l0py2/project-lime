ServerEvents.recipes(event => {
	const oresTag = '#forge:ores';
	const ingotsTag = '#forge:ingots';

	event.remove([
		{
			input: oresTag,
			type: 'minecraft:smelting'
		},
		{
			input: oresTag,
			type: 'minecraft:blasting'
		}
	]);

	event.remove({
		output: ingotsTag,
		type: 'immersiveengineering:arc_furnace'
	});

	event.remove({
		output: 'minecraft:netherite_scrap',
		type: 'immersiveengineering:arc_furnace'
	});

	event.remove([
		{
			type: 'create:crushing'
		},
		{
			type: 'immersiveengineering:crusher'
		}
	]);
});
