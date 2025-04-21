ServerEvents.recipes(event => {
	event.recipes.create.mixing(
		Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE),
		Item.of(global.id.CA('biomass_pellet'), 10)
	);
});
