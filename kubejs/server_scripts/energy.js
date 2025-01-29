ServerEvents.recipes(event => {
	function newAgeEnergising(energyNeeded, input, output) {
		event.custom({
			type: global.id.CN('energising'),
			energy_needed: energyNeeded,
			ingredients: [
				input
			],
			results: [
				output
			]
		});
	}

	function purifyCopperBlock(idPrefix, block) {
		const copperStates = [
			'oxidized_',
			'weathered_',
			'exposed_',
			''
		];

		for (let i = 0; i < copperStates.length - 1; i++) {
			newAgeEnergising(
				4000,
				{ item: `${idPrefix}${copperStates[i]}${block}` },
				{ item: `${idPrefix}${copperStates[i + 1]}${block}` }
			);
		}
	}

	const minecraftCopperBlocks = [
		'cut_copper',
		'cut_copper_slab'
	];

	const createCopperBlocks = [
		'copper_shingle_stairs',
		'copper_shingle_slab',
		'copper_shingles'
	];

	minecraftCopperBlocks.forEach(block => {
		purifyCopperBlock(global.id.MC(''), block);
	});

	createCopperBlocks.forEach(block => {
		purifyCopperBlock(global.id.CR(''), block);
	});

	newAgeEnergising(
		4000,
		{ item: global.id.MC('oxidized_copper') },
		{ item: global.id.MC('weathered_copper') }
	);

	newAgeEnergising(
		4000,
		{ item: global.id.MC('weathered_copper') },
		{ item: global.id.MC('exposed_copper') }
	);

	newAgeEnergising(
		4000,
		{ item: global.id.MC('exposed_copper') },
		{ item: global.id.MC('copper_block') }
	);

	newAgeEnergising(
		500000,
		{ item: global.id.MC('book') },
		{
			item: global.id.MC('enchanted_book'),
			nbt: {
				Enchantments: [{
					id: 'channeling',
					lvl: 1
				}]
			}
		}
	);

	event.remove({ type: global.id.CA('charging') });
});
