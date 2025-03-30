ServerEvents.recipes(event => {
	let incomplete = global.id.KJ('incomplete_m1911');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('modern_kinetic_gun'), '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m1911",HasBulletInBarrel:0b}')
		],
		global.tag.MC('logs'),
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('logs')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cogwheel')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
