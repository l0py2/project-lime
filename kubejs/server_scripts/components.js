ServerEvents.recipes(event => {
	const removedRecipes = [
		'immersiveengineering:crafting/stick_iron',
		'immersiveengineering:crafting/stick_steel',
		'immersiveengineering:crafting/stick_aluminum',
		'immersiveengineering:crafting/plate_copper_hammering',
		'immersiveengineering:crafting/plate_aluminum_hammering',
		'immersiveengineering:crafting/plate_lead_hammering',
		'immersiveengineering:crafting/plate_silver_hammering',
		'immersiveengineering:crafting/plate_nickel_hammering',
		'immersiveengineering:crafting/plate_uranium_hammering',
		'immersiveengineering:crafting/plate_constantan_hammering',
		'immersiveengineering:crafting/plate_electrum_hammering',
		'magistuarmory:steel_plate',
		'immersiveengineering:crafting/plate_steel_hammering',
		'immersiveengineering:crafting/plate_iron_hammering',
		'immersiveengineering:crafting/plate_gold_hammering',
		'immersiveengineering:crafting/wire_copper',
		'immersiveengineering:crafting/wire_electrum',
		'immersiveengineering:crafting/wire_aluminum',
		'immersiveengineering:crafting/wire_steel',
		'immersiveengineering:crafting/wire_lead'
	];

	removedRecipes.forEach(recipe => {
		event.remove({ id: recipe });
	});

	event.recipes.create.pressing(
		global.tag.M('plates/electrum'),
		global.tag.M('ingots/electrum')
	);

	[
		'copper',
		'aluminum',
		'lead',
		'silver',
		'nickel',
		'uranium',
		'constantan',
		'electrum',
		'steel',
		'iron',
		'gold'
	].forEach(material => {
		event.recipes.create.milling(
			global.tag.M(`dusts/${material}`),
			global.tag.M(`ingots/${material}`)
		);
	});

	event.custom({
		type: global.id.IE('crusher'),
		energy: 6000,
		input: { tag: global.id.M('obsidian') },
		result: {
			count: 1,
			tag: global.id.M('dusts/obsidian')
		},
		secondaries: [
			{
				chance: 0.75,
				output: { tag: global.id.M('obsidian') }
			}
		]
	});

	event.custom({
		type: global.id.IE('crusher'),
		energy: 3000,
		input: { tag: global.id.M('gems/diamond') },
		result: {
			count: 1,
			tag: global.id.M('dusts/diamond')
		},
		secondaries: []
	});
});
