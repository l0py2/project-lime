ServerEvents.recipes(event => {
	global.cutting.addConversionRecipes(
		event,
		global.id.MC('terracotta'),
		[global.id.QK('shingles')]
	);
	
	for(const colour of global.dyeColours) {
		global.cutting.addConversionRecipes(
			event,
			global.id.MC(`${colour}_terracotta`),
			[global.id.QK(`${colour}_shingles`)]
		);
	}
	
	// Shingles
	let shingles = [global.cutting.createBlock('QK', 'shingles')];
	
	for(const colour of global.dyeColours) {
		shingles.push(global.cutting.createBlock('QK', `${colour}_shingles`));
	}
	
	global.cutting.addBaseTypeRecipes(
		event,
		shingles,
		[
			global.cutting.createBlockType('QK', (material) => `${material}_slab`, global.cutting.values.slab),
			global.cutting.createBlockType('QK', (material) => `${material}_stairs`, global.cutting.values.stairs)
		]
	);
});