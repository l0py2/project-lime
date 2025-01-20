const removedItems = [
	global.id.CN('electrical_connector'),
	global.id.CN('copper_wire'),
	global.id.CN('overcharged_iron_wire'),
	global.id.CN('overcharged_golden_wire'),
	global.id.CN('overcharged_diamond_wire'),
	global.id.CA('electric_motor'),
	global.id.CA('alternator')
];

ServerEvents.recipes(event => {
	function replaceInput(original, replacement) {
		event.replaceInput(
			{ input: original },
			original,
			replacement
		);
	}

	replaceInput(global.id.CN('copper_wire'), global.id.CA('copper_wire'));

	removedItems.forEach(item => {
		event.remove({
			output: item
		});
	});
});

ServerEvents.tags('item', event => {
	removedItems.forEach(item => {
		event.add(global.id.KJ('removed'), item);
	});
});
