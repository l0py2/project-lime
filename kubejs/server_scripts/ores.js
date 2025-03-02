ServerEvents.recipes(event => {
	const ores = [
		'coal',
		'iron',
		'copper',
		'gold',
		'redstone',
		'emerald',
		'lapis',
		'diamond',
		'quartz',
		'zinc'
	];

	const metals = [
		'iron',
		'copper',
		'gold',
		'zinc'
	];

	for(const ore of ores) {
		event.remove({
			type: global.id.MC('smelting'),
			input: global.tag.M(`ores/${ore}`)
		});

	}

	for(const metal of metals) {
		event.remove({
			type: global.id.MC('smelting'),
			input: global.tag.M(`raw_materials/${metal}`)
		});

		event.remove({
			type: global.id.MC('smelting'),
			input: global.id.CR(`crushed_raw_${metal}`)
		});
	}

	event.remove({
		type: global.id.MC('smelting'),
		input: global.tag.M('ores/netherite_scrap')
	});
});
