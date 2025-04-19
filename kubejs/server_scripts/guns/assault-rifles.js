ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_m16a4'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_m16a1'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_type_81'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_qbz_95'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_ak47'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_aug'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_scar_l'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_hk416d'), global.tag.M('plates/iron'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_m16a4');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"BURST",GunId:"tacz:m16a4",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_m16a1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m16a1",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_type_81');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:type_81",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('logs')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_qbz_95');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:qbz_95",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_ak47');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:ak47",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('logs')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_aug');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:aug",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_scar_l');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:scar_l",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_hk416d');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:hk416d",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
