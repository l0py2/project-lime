//priority: 49

(() => {
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
	global.blockConversions.types.add(`${stoneType}`);
	
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.HC(`${stoneType}_corner_trim`)]);
	global.blockConversions.tags.push([global.id.KJ(`block_types/${stoneType}`), global.id.HC(`${stoneType}_pillar_trim`)]);
}
})();