ServerEvents.recipes(event => {
	function rolling(input, output) {
		event.custom(
			{
				type: global.id.CA('rolling'),
				ingredients: [{
					item: input
				}],
				results: [{
					item: output
				}]
			}
		);
	}

	event.remove({ output: global.id.NA('overcharged_diamond_wire') });
	event.custom({
		type: global.id.CR('sequenced_assembly'),
		ingredient: {
			item: global.id.NA('overcharged_diamond')
		},
		results: [{
				count: 2,
				item: global.id.NA('overcharged_diamond_wire')
		}],
		loops: 3,
		sequence: [
			{
				type: global.id.CA('rolling'),
				ingredients: [{
					item: global.id.NA('incomplete_wire')
				}],
				results: [{
					item: global.id.NA('incomplete_wire')
				}]
			},
			{
				type: global.id.NA('energising'),
				energy_needed: 100,
				ingredients: [{
					item: global.id.NA('incomplete_wire')
				}],
				results: [{
					item: global.id.NA('incomplete_wire')
				}]
			}
		],
		transitionalItem: {
			item: global.id.NA('incomplete_wire')
		}
	});

	event.remove({ output: global.id.NA('overcharged_iron_wire') });
	rolling(global.id.NA('overcharged_iron_sheet'), global.id.NA('overcharged_iron_wire'));

	event.remove({ output: global.id.NA('overcharged_golden_wire') });
	rolling(global.id.NA('overcharged_golden_sheet'), global.id.NA('overcharged_golden_wire'));
});
