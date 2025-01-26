// priority: 1

ServerEvents.tags('item', event => {
	global.removedItems.forEach(item => {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	});
});

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
	replaceInput(global.id.CR('copper_sheet'), global.id.IE('plate_copper'));
	replaceInput(global.id.CR('golden_sheet'), global.id.IE('plate_gold'));
	replaceOutput(global.id.CR('golden_sheet'), global.id.IE('plate_gold'));

	global.removedItems.forEach(item => {
		event.remove({
			output: item
		});
	});
});

ServerEvents.tags('item', event => {
	global.removedItems.forEach(item => {
		event.removeAllTagsFrom(item);
		event.add(global.id.KJ('removed'), item);
	});
});
