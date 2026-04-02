ServerEvents.tags('item', event => {
	const stoneTypes = [
		'asurine',
		'crimsite',
		'ochrum',
		'veridium',
		'limestone',
		'scorchia',
		'scoria'
	];
	
	for(const stoneType of stoneTypes) {
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.CR(`${stoneType}`));
	}
});