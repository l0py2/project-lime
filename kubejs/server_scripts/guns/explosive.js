ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_m320'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_rpg7'), global.tag.M('plates/iron'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_m320');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m320",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_rpg7');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:rpg7",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
