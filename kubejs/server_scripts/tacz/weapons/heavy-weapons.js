ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_rpg7'), global.tag.M('plates/steel'));
	event.stonecutting(global.id.KJ('incomplete_m320'), global.tag.M('plates/steel'));
	event.stonecutting(global.id.KJ('incomplete_rpk'), global.tag.M('plates/steel'));
	event.stonecutting(global.id.KJ('incomplete_m249'), global.tag.M('plates/steel'));
	event.stonecutting(global.id.KJ('incomplete_minigun'), global.tag.M('plates/ostrum'));

	let incomplete

	//RPG-7 Recipe

	incomplete = global.id.KJ('incomplete_rpg7');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:rpg7",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);

	//M320 Recipe

	incomplete = global.id.KJ('incomplete_m320');
	event.recipes.create.sequenced_assembly(
		[
		Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m320",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.PC('plastic_sheets')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//RPK Recipe

	incomplete = global.id.KJ('incomplete_rpk');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:rpk",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.PC('plastic_sheets')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(4);

	//M249 Recipe

	incomplete = global.id.KJ('incomplete_m249');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:m249",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('desh_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/desh')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.PC('plastic_sheets')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(4);

	//M134 Recipe

	incomplete = global.id.KJ('incomplete_minigun');
	event.recipes.create.sequenced_assembly(
		[
			Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:minigun",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.id.KJ('ostrum_rod')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('precision_mechanism')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/ostrum')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/ostrum')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/ostrum')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(6);
});
