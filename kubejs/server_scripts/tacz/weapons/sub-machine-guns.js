ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_uzi'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_ump45'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_hk_mp5a5'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_vector45'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_p90'), global.tag.M('plates/iron'));

	let incomplete;

	//UZI Recipe

	incomplete = global.id.KJ('incomplete_uzi');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:uzi",HasBulletInBarrel:1b}')
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
	).transitionalItem(incomplete).loops(2);

	//UMP45 Recipe

	incomplete = global.id.KJ('incomplete_ump45');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:ump45",HasBulletInBarrel:1b}')
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
	).transitionalItem(incomplete).loops(2);

	//MP5A5 Recipe

	incomplete = global.id.KJ('incomplete_hk_mp5a5');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:hk_mp5a5",HasBulletInBarrel:0b}')
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
	).transitionalItem(incomplete).loops(2);

	//Vector .45 Recipe

	incomplete = global.id.KJ('incomplete_vector45');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:vector45",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//P90 Recipe

	incomplete = global.id.KJ('incomplete_p90');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:p90",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.KJ('incomplete_sight_p90')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);
});
