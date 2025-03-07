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
			input: global.tag.M(`storage_blocks/raw_${metal}`)
		});

		event.remove({
			type: global.id.MC('smelting'),
			input: global.id.CR(`crushed_raw_${metal}`)
		});

		event.remove({
			type: global.id.MC('smelting'),
			input: global.id.QK(`raw_${metal}_bricks`)
		});
	}

	event.remove({
		type: global.id.MC('smelting'),
		input: global.tag.M('ores/netherite_scrap')
	});

	event.smelting(global.id.MC('copper_ingot'), global.tag.M('ores/copper')).xp(0.7);
	event.smelting(global.id.MC('copper_ingot'), global.tag.M('raw_materials/copper')).xp(0.7);
	event.smelting(global.id.MC('copper_ingot'), global.tag.M('storage_blocks/raw_copper')).xp(6.3);
	event.smelting(global.id.MC('copper_ingot'), global.id.CR('crushed_raw_copper')).xp(0.1);
	event.smelting(global.id.MC('copper_ingot'), global.id.QK('raw_copper_bricks')).xp(6.3);
});
