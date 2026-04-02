ServerEvents.tags('item', event => {
	const stoneTypes = [
		'asurine',
		'crimsite',
		'ochrum',
		'veridium',
		'limestone',
		'scorchia',
		'scoria',
		'andesite',
		'diorite',
		'granite',
		'calcite',
		'dripstone',
		'deepslate',
		'tuff'
	];
	
	for(const stoneType of stoneTypes) {
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.CR(`cut_${stoneType}`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.CR(`cut_${stoneType}_bricks`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.CR(`small_${stoneType}_bricks`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.CR(`layered_${stoneType}`));
		event.add(global.id.KJ(`block_types/${stoneType}`), global.id.CR(`${stoneType}_pillar`));
		
		event.add(global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`cut_${stoneType}_slab`));
		event.add(global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}_slab`));
		event.add(global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`cut_${stoneType}_brick_slab`));
		event.add(global.id.KJ(`slab_types/${stoneType}`), global.id.CR(`small_${stoneType}_brick_slab`));
		
		event.add(global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`cut_${stoneType}_stairs`));
		event.add(global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}_stairs`));
		event.add(global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`cut_${stoneType}_brick_stairs`));
		event.add(global.id.KJ(`stair_types/${stoneType}`), global.id.CR(`small_${stoneType}_brick_stairs`));
		
		event.add(global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`cut_${stoneType}_wall`));
		event.add(global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`polished_cut_${stoneType}_wall`));
		event.add(global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`cut_${stoneType}_brick_wall`));
		event.add(global.id.KJ(`wall_types/${stoneType}`), global.id.CR(`small_${stoneType}_brick_wall`));
	}
});