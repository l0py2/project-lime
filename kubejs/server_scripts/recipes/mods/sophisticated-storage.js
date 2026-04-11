ServerEvents.recipes(event => {
	for(const type of global.materials.wood.minecraft) {
		event.remove({ output: Item.of(global.id.OS('chest'), `{woodType:"${type}"}`) });
		
		if(type == 'bamboo') {
			event.shapeless(
				Item.of(global.id.OS('chest'), `{woodType:"${type}"}`),
				[
					global.id.WW(`${type}_closet`),
					global.id.MC('lever')
				]
			);
		} else {
			event.shapeless(
				Item.of(global.id.OS('chest'), `{woodType:"${type}"}`),
				[
					global.id.WW(`${type}_chest`),
					global.id.MC('lever')
				]
			);
		}
	}
});