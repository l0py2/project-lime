ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_type_81'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_ak47'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_m16a4'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_m4a1'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_hk416d'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_g36k'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_scar_l'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_aug'), global.tag.M('plates/compressed_iron'));
	event.stonecutting(global.id.KJ('incomplete_qbz_95'), global.tag.M('plates/compressed_iron'));

	let incomplete

	//Type 81 Recipe

	incomplete = global.id.KJ('incomplete_type_81');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:type_81",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('brass_casing')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//AK47 Recipe

	incomplete = global.id.KJ('incomplete_ak47');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('brass_casing')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//M16A4 Recipe

	incomplete = global.id.KJ('incomplete_m16a4');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"BURST",GunId:"tacz:m16a4",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//M4A1 Recipe

	incomplete = global.id.KJ('incomplete_m4a1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:m4a1",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//HK416D Recipe

	incomplete = global.id.KJ('incomplete_hk416d');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:hk416d",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//G36C Recipe

	incomplete = global.id.KJ('incomplete_g36k');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:g36k",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//SCAR-L Recipe

	incomplete = global.id.KJ('incomplete_scar_l');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:scar_l",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//AUG Recipe

	incomplete = global.id.KJ('incomplete_aug');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:aug",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('incomplete_scope_retro_2x')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//QBZ95 Recipe

	incomplete = global.id.KJ('incomplete_qbz_95');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:qbz_95",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);
});
