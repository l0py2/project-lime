ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_m1911'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_glock_17'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_p320'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_deagle_golden'), global.tag.M('plates/gold'));
	event.stonecutting(global.id.KJ('incomplete_deagle'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_timeless50_slot'), global.tag.M('plates/gold'));
	event.stonecutting(global.id.KJ('incomplete_b93r_slot'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_cz75'), global.tag.M('plates/iron'));

	let incomplete;

	//M1911 Recipe

	incomplete = global.id.KJ('incomplete_m1911');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m1911",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/wooden')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//Glock 17 Recipe

	incomplete = global.id.KJ('incomplete_glock_17');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/compressed_iron')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//P320 Recipe

	incomplete = global.id.KJ('incomplete_p320');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:p320",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/compressed_iron')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//Golden Deagle Recipe

	incomplete = global.id.KJ('incomplete_deagle_golden');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:deagle_golden",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//Deagle Recipe

	incomplete = global.id.KJ('incomplete_deagle');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:deagle",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//Timeless .50

	incomplete = global.id.KJ('incomplete_timeless50_slot');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:timeless50",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//B93R Recipe

	incomplete = global.id.KJ('incomplete_b93r_slot');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"BURST",GunId:"tacz:b93r",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//CZ 75 Recipe

	incomplete = global.id.KJ('incomplete_cz75');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:cz75",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);
});
