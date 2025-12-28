ServerEvents.recipes(event => {
	/* Oak uses the vanilla ladder so it needs to be added to
	the list after adding all the ladder recipes*/
	const woodTypes = [
		'spruce',
		'mangrove',
		'jungle',
		'birch',
		'acacia',
		'dark_oak',
		'jungle'
	];
	
	for(const woodType of woodTypes) {
		event.stonecutting(
			Item.of(global.id.WW(`${woodType}_ladder`), 4),
			global.tag.MC(`${woodType}_logs`)
		);
	}
	
	event.stonecutting(
		Item.of(global.id.MC('ladder'), 4),
		global.tag.MC('oak_logs')
	);
			
	event.stonecutting(
		global.id.MC('ladder'),
		global.id.MC('oak_planks')
	);
	
	woodTypes.push('oak');
	
	for(const woodType of woodTypes) {
		event.stonecutting(
			Item.of(global.id.MC(`${woodType}_stairs`), 4),
			global.tag.MC(`${woodType}_logs`)
		);
		
		event.stonecutting(
			Item.of(global.id.MC(`${woodType}_door`), 2),
			global.tag.MC(`${woodType}_logs`)
		);
		
		event.stonecutting(
			Item.of(global.id.MC(`${woodType}_fence`), 2),
			global.tag.MC(`${woodType}_logs`)
		);
		
		event.stonecutting(
			Item.of(global.id.MC(`${woodType}_pressure_plate`), 2),
			global.tag.MC(`${woodType}_logs`)
		);
		
		event.stonecutting(
			Item.of(global.id.WW(`${woodType}_boards`), 2),
			global.tag.MC(`${woodType}_logs`)
		);
		
		event.stonecutting(
			global.id.MC(`${woodType}_fence_gate`),
			global.tag.MC(`${woodType}_logs`)
		);
	}
});