ServerEvents.recipes(event => {
	const oresTag = '#forge:ores';
	const rawOresTag = '#forge:raw_materials';
	const dustsTag = '#forge:dusts';
	const crushedOresTag = '#create:crushed_raw_materials';

	event.remove([
		{ type: 'create:crushing' },
		{ type: 'create:milling' },
		{ type: 'immersiveengineering:arc_furnace' },
		{ type: 'immersiveengineering:crusher' },
		{ type: 'minecraft:blasting' }
	]);

	event.remove([
		{
			input: oresTag,
			type: 'minecraft:smelting'
		},
		{
			input: rawOresTag,
			type: 'minecraft:smelting'
		},
		{
			input: dustsTag,
			type: 'minecraft:smelting'
		},
		{
			input: crushedOresTag,
			type: 'minecraft:smelting'
		}
	]);
});
