ServerEvents.tags('item', event => {
	const stoneTypes = [
		'blackstone',
		'calcite',
		'deepslate',
		'dripstone',
		'quartz',
		'stone',
		'andesite',
		'diorite',
		'granite'
	];
	
	for(const stoneType of stoneTypes) {
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.HC(`${stoneType}_corner_trim`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.HC(`${stoneType}_pillar_trim`));
	}
});