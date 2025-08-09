ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_spr15hb'), global.tag.M('plates/steel'));
	event.stonecutting(global.id.KJ('incomplete_mk14'), global.tag.M('plates/steel'));
	event.stonecutting(global.id.KJ('incomplete_sks_tactical'), global.tag.M('plates/steel'));

	let incomplete

	//SPR-15 HB Recipe

	incomplete = global.id.KJ('incomplete_spr15hb');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:spr15hb",HasBulletInBarrel:1b}')
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

	//SKS Tactical Recipe

	incomplete = global.id.KJ('incomplete_sks_tactical');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:sks_tactical",HasBulletInBarrel:1b}')
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
	).transitionalItem(incomplete).loops(4);
});
