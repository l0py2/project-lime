ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_scar_h'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_hk_g3'), global.tag.M('plates/iron'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_scar_h');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:scar_h",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_hk_g3');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:hk_g3",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
