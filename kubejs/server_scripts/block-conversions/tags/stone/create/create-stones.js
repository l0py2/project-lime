//priority: 49

(() => {
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
	global.blockConversions.types.add(`${stoneType}`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.CR(`${stoneType}`)]);
}
})();