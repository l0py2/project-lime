ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_springfield1873_slot'), global.tag.MC('logs'));

	let incomplete

	//Springfield 1873 Trapdoor Recipe

	incomplete = global.id.KJ('incomplete_springfield1873_slot');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:springfield1873",HasBulletInBarrel:0b}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('rods/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gears/steel')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('stripped_wood')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('stripped_wood')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(3);
});
