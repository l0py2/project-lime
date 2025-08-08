ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_m700'), global.tag.M('plates/desh'));
	event.stonecutting(global.id.KJ('incomplete_m107'), global.tag.M('plates/calorite'));
	event.stonecutting(global.id.KJ('incomplete_m95'), global.tag.M('plates/calorite'));
	event.stonecutting(global.id.KJ('incomplete_ai_awp'), global.tag.M('plates/ostrum'));

	let incomplete

	//M700 Recipe

	incomplete = global.id.KJ('incomplete_m700');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m700",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('ostrum_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('rotation_speed_controller')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/ostrum')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/ostrum')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(4);

	//M107 Recipe

	incomplete = global.id.KJ('incomplete_m107');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m107",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('calorite_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('rotation_speed_controller')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/calorite')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/calorite')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(6);

	//M95 Recipe

	incomplete = global.id.KJ('incomplete_m95');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m95",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('calorite_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('rotation_speed_controller')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/calorite')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/calorite')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(6);

	//AWP Recipe

	incomplete = global.id.KJ('incomplete_ai_awp');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:ai_awp",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('calorite_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('rotation_speed_controller')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/calorite')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/calorite')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(4);
});
