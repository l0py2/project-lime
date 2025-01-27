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

	function replaceAll(original, replacement) {
		replaceInput(original, replacement);
		replaceOutput(original, replacement);
	}

	replaceAll(global.id.CA('electrum_sheet'), global.tag.M('plates/electrum'));
	replaceAll(global.id.CR('copper_sheet'), global.tag.M('plates/copper'));
	replaceAll(global.id.CR('golden_sheet'), global.tag.M('plates/gold'));
	replaceAll(global.id.CR('iron_sheet'), global.tag.M('plates/iron'));
	replaceAll(global.id.FD('rope'), global.tag.M('rope'));
	replaceAll(global.id.CA('iron_rod'), global.tag.M('plates/iron'));
	replaceInput(global.id.CN('copper_wire'), global.tag.M('wires/copper'));
	replaceInput(global.id.CA('electrum_wire'), global.tag.M('wires/electrum'));

	global.removedItems.forEach(item => {
		event.remove({
			output: item
		});
	});
});
