ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_sniper_extended_mag_1'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sniper_extended_mag_2'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sniper_extended_mag_3'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_extended_mag_1'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_extended_mag_2'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_extended_mag_3'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_light_extended_mag_1'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_light_extended_mag_2'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_light_extended_mag_3'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_ammo_mod_i'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_ammo_mod_hp'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_ammo_mod_he'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_ammo_mod_fmj'), global.tag.M('plates/brass'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_sniper_extended_mag_1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sniper_extended_mag_1"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_copper_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(15);

	incomplete = global.id.KJ('incomplete_sniper_extended_mag_2');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sniper_extended_mag_2"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_iron_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(15);

	incomplete = global.id.KJ('incomplete_sniper_extended_mag_3');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sniper_extended_mag_3"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_gold_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(15);

	incomplete = global.id.KJ('incomplete_extended_mag_1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:extended_mag_1"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_copper_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(10);

	incomplete = global.id.KJ('incomplete_extended_mag_2');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:extended_mag_2"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_iron_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(10);

	incomplete = global.id.KJ('incomplete_extended_mag_3');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:extended_mag_3"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_gold_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(10);

	incomplete = global.id.KJ('incomplete_light_extended_mag_1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:light_extended_mag_1"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_copper_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_light_extended_mag_2');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:light_extended_mag_2"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_iron_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_light_extended_mag_3');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:light_extended_mag_3"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.SS('limited_gold_barrel_1')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_ammo_mod_i');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:ammo_mod_i"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cinder_flour')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('fire_charge')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(10);

	incomplete = global.id.KJ('incomplete_ammo_mod_hp');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:ammo_mod_hp"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(10);

	incomplete = global.id.KJ('incomplete_ammo_mod_he');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:ammo_mod_he"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.CR('cinder_flour')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('fire_charge')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/netherite')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(10);

	incomplete = global.id.KJ('incomplete_ammo_mod_fmj');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:ammo_mod_fmj"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/obsidian')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(10);
});
