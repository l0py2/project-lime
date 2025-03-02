// priority: 2

ServerEvents.tags('item', event => {
	event.add(global.id.M('doughs'), global.id.CD('corn_dough'));
	event.add(global.id.M('doughs/corn'), global.id.CD('corn_dough'));
	event.add(global.id.M('foods/dough'), global.id.CD('corn_dough'));
});
