ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_bayonet_m9'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_bayonet_6h3'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_silencer_phantom_s1'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_silencer_ptilopsis'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_silencer_mirage'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_silencer_vulture'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_silencer_knight_qd'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_silencer_ursus'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_brake_cthulhu'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_brake_pioneer'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_brake_cyclone_d2'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_brake_trex'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_muzzle_compensator_trident'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_deagle_golden_long_barrel'), global.tag.M('plates/brass'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_bayonet_m9');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:bayonet_m9"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('logs')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	incomplete = global.id.KJ('incomplete_bayonet_6h3');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:bayonet_6h3"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('logs')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(2);

	incomplete = global.id.KJ('incomplete_muzzle_silencer_ptilopsis');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_silencer_ptilopsis"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_silencer_mirage');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_silencer_mirage"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_silencer_vulture');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_silencer_vulture"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_silencer_knight_qd');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_silencer_knight_qd"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_silencer_ursus');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_silencer_ursus"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.MC('wool')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_brake_cthulhu');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_brake_cthulhu"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_brake_pioneer');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_brake_pioneer"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_brake_cyclone_d2');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_brake_cyclone_d2"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_brake_trex');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_brake_trex"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_muzzle_compensator_trident');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:muzzle_compensator_trident"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_deagle_golden_long_barrel');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:deagle_golden_long_barrel"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/gold')]),
			event.recipes.createPressing(incomplete, incomplete),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/gold')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
