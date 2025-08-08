ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_m16a1'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_hk_g3'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_scar_h'), global.tag.M('plates/compressed_iron'));

	let incomplete

	//SCAR-H Recipe

	incomplete = global.id.KJ('incomplete_scar_h');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:scar_h",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('desh_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//HK G3 Recipe

	incomplete = global.id.KJ('incomplete_hk_g3');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:hk_g3",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('desh_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//M16A1 Recipe

	incomplete = global.id.KJ('incomplete_m16a1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:m16a1",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//MK 14 Recipe

	incomplete = global.id.KJ('incomplete_mk14');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:mk14",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('ostrum_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('rotation_speed_controller')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/ostrum')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(4);
});
