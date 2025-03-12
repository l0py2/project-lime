ServerEvents.recipes(event => {
	function newAgeEnergising(input, output, energy) {
		const ingredients = input.startsWith('#') ?
			[{
				tag: input.slice(1)
			}]
			:
			[{
				item: input
			}];

		const results = output.startsWith('#') ?
			[{
				tag: output.slice(1)
			}]
			:
			[{
				item: output
			}];

		event.custom({
			type: global.id.NA('energising'),
			energy_needed: energy,
			ingredients: ingredients,
			results: results
		});
	}

	newAgeEnergising(global.id.MC('oxidized_copper'), global.id.MC('weathered_copper'), 4000);
	newAgeEnergising(global.id.MC('weathered_copper'), global.id.MC('exposed_copper'), 4000);
	newAgeEnergising(global.id.MC('exposed_copper'), global.id.MC('copper_block'), 4000);

	newAgeEnergising(global.id.MC('oxidized_cut_copper'), global.id.MC('weathered_cut_copper'), 4000);
	newAgeEnergising(global.id.MC('weathered_cut_copper'), global.id.MC('exposed_cut_copper'), 4000);
	newAgeEnergising(global.id.MC('exposed_cut_copper'), global.id.MC('cut_copper'), 4000);
	newAgeEnergising(global.id.MC('oxidized_cut_copper_slab'), global.id.MC('weathered_cut_copper_slab'), 4000);
	newAgeEnergising(global.id.MC('weathered_cut_copper_slab'), global.id.MC('exposed_cut_copper_slab'), 4000);
	newAgeEnergising(global.id.MC('exposed_cut_copper_slab'), global.id.MC('cut_copper_slab'), 4000);
	newAgeEnergising(global.id.MC('oxidized_cut_copper_stairs'), global.id.MC('weathered_cut_copper_stairs'), 4000);
	newAgeEnergising(global.id.MC('weathered_cut_copper_stairs'), global.id.MC('exposed_cut_copper_stairs'), 4000);
	newAgeEnergising(global.id.MC('exposed_cut_copper_stairs'), global.id.MC('cut_copper_stairs'), 4000);

	newAgeEnergising(global.id.CR('oxidized_copper_shingles'), global.id.CR('weathered_copper_shingles'), 4000);
	newAgeEnergising(global.id.CR('weathered_copper_shingles'), global.id.CR('exposed_copper_shingles'), 4000);
	newAgeEnergising(global.id.CR('exposed_copper_shingles'), global.id.CR('copper_shingles'), 4000);
	newAgeEnergising(global.id.CR('oxidized_copper_shingle_slab'), global.id.CR('weathered_copper_shingle_slab'), 4000);
	newAgeEnergising(global.id.CR('weathered_copper_shingle_slab'), global.id.CR('exposed_copper_shingle_slab'), 4000);
	newAgeEnergising(global.id.CR('exposed_copper_shingle_slab'), global.id.CR('copper_shingle_slab'), 4000);
	newAgeEnergising(global.id.CR('oxidized_copper_shingle_stairs'), global.id.CR('weathered_copper_shingle_stairs'), 4000);
	newAgeEnergising(global.id.CR('weathered_copper_shingle_stairs'), global.id.CR('exposed_copper_shingle_stairs'), 4000);
	newAgeEnergising(global.id.CR('exposed_copper_shingle_stairs'), global.id.CR('copper_shingle_stairs'), 4000);

	newAgeEnergising(global.id.QK('oxidized_cut_copper_vertical_slab'), global.id.QK('weathered_cut_copper_vertical_slab'), 4000);
	newAgeEnergising(global.id.QK('weathered_cut_copper_vertical_slab'), global.id.QK('exposed_cut_copper_vertical_slab'), 4000);
	newAgeEnergising(global.id.QK('exposed_cut_copper_vertical_slab'), global.id.QK('cut_copper_vertical_slab'), 4000);

	newAgeEnergising(global.id.CR('oxidized_copper_tiles'), global.id.CR('weathered_copper_tiles'), 4000);
	newAgeEnergising(global.id.CR('weathered_copper_tiles'), global.id.CR('exposed_copper_tiles'), 4000);
	newAgeEnergising(global.id.CR('exposed_copper_tiles'), global.id.CR('copper_tiles'), 4000);
	newAgeEnergising(global.id.CR('oxidized_copper_tile_slab'), global.id.CR('weathered_copper_tile_slab'), 4000);
	newAgeEnergising(global.id.CR('weathered_copper_tile_slab'), global.id.CR('exposed_copper_tile_slab'), 4000);
	newAgeEnergising(global.id.CR('exposed_copper_tile_slab'), global.id.CR('copper_tile_slab'), 4000);
	newAgeEnergising(global.id.CR('oxidized_copper_tile_stairs'), global.id.CR('weathered_copper_tile_stairs'), 4000);
	newAgeEnergising(global.id.CR('weathered_copper_tile_stairs'), global.id.CR('exposed_copper_tile_stairs'), 4000);
	newAgeEnergising(global.id.CR('exposed_copper_tile_stairs'), global.id.CR('copper_tile_stairs'), 4000);
});
