const removedItems = [
	global.id.CN('electrical_connector'),
	global.id.CN('copper_wire'),
	global.id.CN('overcharged_iron_wire'),
	global.id.CN('overcharged_golden_wire'),
	global.id.CN('overcharged_diamond_wire'),
	global.id.CA('electric_motor'),
	global.id.CA('alternator'),
	global.id.FD('rope'),
	global.id.QK('rope'),
	global.id.IE('waterwheel_segment'),
	global.id.IE('windmill_blade'),
	global.id.IE('windmill_sail'),
	global.id.IE('watermill'),
	global.id.IE('windmill'),
	global.id.IE('dynamo'),
	global.id.IE('bannerpattern_windmill'),
	global.id.EK('steel_ingot'),
	global.id.EK('steel_nugget'),
	global.id.EK('steel_plate')
];

ServerEvents.recipes(event => {
	function replaceInput(original, replacement) {
		event.replaceInput(
			{ input: original },
			original,
			replacement
		);
	}

	function replaceOutput(original, replacement) {
		event.replaceOutput(
			{ output: original },
			original,
			replacement
		);
	}

	replaceInput(global.id.CN('copper_wire'), global.id.CA('copper_wire'));
	replaceInput(global.id.FD('rope'), global.id.SP('rope'));
	replaceOutput(global.id.FD('rope'), global.id.SP('rope'));

	removedItems.forEach(item => {
		event.remove({
			output: item
		});
	});
});

ServerEvents.tags('item', event => {
	removedItems.forEach(item => {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	});
});
