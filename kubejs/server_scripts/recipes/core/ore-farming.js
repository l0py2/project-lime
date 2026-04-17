ServerEvents.recipes(event => {
	event.recipes.create.compacting(
		[
			global.id.MC('diamond'),
			Item.of(global.id.MC('diamond')).withChance(0.5)
		],
		Item.of(global.tag.M('storage_blocks/coal'), 16)
	).heated();
	
	event.recipes.create.compacting(
		[
			global.id.MC('diamond'),
			Item.of(global.id.MC('diamond')).withChance(0.5)
		],
		Item.of(global.tag.M('storage_blocks/coal'), 4)
	).superheated();
	
	event.recipes.create.compacting(
		global.id.MC('diamond'),
		Item.of(global.tag.M('storage_blocks/charcoal'), 16)
	).heated();
	
	event.recipes.create.compacting(
		global.id.MC('diamond'),
		Item.of(global.tag.M('storage_blocks/charcoal'), 4)
	).superheated();
	
	event.recipes.create.mixing(
		Item.of(global.id.MC('tuff'), 4),
		[
			Fluid.of(global.id.MC('water'), 500),
			Fluid.of(global.id.MC('lava'), 500),
			global.tag.M('stone'),
			global.tag.M('cobblestone')
		]
	).heated();
});