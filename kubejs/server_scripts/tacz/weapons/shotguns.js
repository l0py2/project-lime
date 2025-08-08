ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_db_short'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_db_long'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_m870'), global.tag.M('plates/iron'));
	event.stonecutting(global.id.KJ('incomplete_aa12'), global.tag.M('plates/iron'));

	let incomplete;

	//DB-2 Durin Recipe

	incomplete = global.id.KJ('incomplete_db_short');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:db_short",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('andesite_casing')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('andesite_casing')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//DB-4 Ursus Recipe

	incomplete = global.id.KJ('incomplete_db_long');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:db_long",HasBulletInBarrel:1b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/compressed_iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('andesite_casing')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('andesite_casing')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//M870 Recipe

	incomplete = global.id.KJ('incomplete_m870');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m870",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('andesite_casing')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('andesite_casing')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	//AA12 Recipe

	incomplete = global.id.KJ('incomplete_aa12');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:aa12",HasBulletInBarrel:1b}')
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
});
