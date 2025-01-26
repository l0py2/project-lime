ServerEvents.recipes(event => {
	const materials = [
		'aluminum',
		'brass',
		'constantan',
		'copper',
		'electrum',
		'gold',
		'iron',
		'lead',
		'nickel',
		'silver',
		'steel',
		'uranium',
		'zinc'
	];

	materials.forEach(material => {
		event.remove({
			type: global.id.MC('crafting'),
			output: global.tag.M(`plates/${material}`)
		});

		event.remove({
			type: global.id.CR('pressing'),
			output: global.tag.M(`plates/${material}`)
		});

		event.remove({
			type: global.id.IE('metal_press'),
			output: global.tag.M(`plates/${material}`)
		});

		event.recipes.create.pressing(
			global.tag.M(`plates/${material}`),
			global.tag.M(`ingots/${material}`)
		);

		event.recipes.immersiveengineering.metal_press(
			global.tag.M(`plates/${material}`),
			global.tag.M(`ingots/${material}`),
			global.id.IE('mold_plate')
		);
	});
});
