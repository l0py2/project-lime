ServerEvents.recipes(event => {
	const plateMaterials = [
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

	plateMaterials.forEach(material => {
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

	function rolling(input, output) {
		event.custom({
			type: global.id.CA('rolling'),
			input: input, 
			result: output
		});
	}

	function rodByRolling(inputTag, output) {
		rolling(
			{ tag: inputTag },
			{ item: output, count: 2 }
		);
	}

	const rodMaterials = [
		'iron',
		'steel',
		'aluminum',
		'copper',
		'gold',
		'electrum',
		'brass'
	];

	rodMaterials.forEach(material => {
		event.remove({
			output: global.tag.M(`rods/${material}`)
		});

		event.recipes.immersiveengineering.metal_press(
			Item.of(global.tag.M(`rods/${material}`), 2),
			global.tag.M(`ingots/${material}`),
			global.id.IE('mold_rod')
		);
	});

	rodByRolling(global.id.M('ingots/iron'), global.id.IE('stick_iron'));
	rodByRolling(global.id.M('ingots/steel'), global.id.IE('stick_steel'));
	rodByRolling(global.id.M('ingots/aluminum'), global.id.IE('stick_aluminum'));
	rodByRolling(global.id.M('ingots/copper'), global.id.CA('copper_rod'));
	rodByRolling(global.id.M('ingots/gold'), global.id.CA('gold_rod'));
	rodByRolling(global.id.M('ingots/electrum'), global.id.CA('electrum_rod'));
	rodByRolling(global.id.M('ingots/brass'), global.id.CA('brass_rod'));
});
