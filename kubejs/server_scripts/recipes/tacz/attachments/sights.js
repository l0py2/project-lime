ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_sight_rmr_dot'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sight_coyote'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sight_exp3'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sight_sro_dot'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sight_t2'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sight_t1'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sight_552'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_scope_retro_2x'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_sight_uh1'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_scope_standard_8x'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_scope_elcan_4x'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_scope_lpvo_1_6'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_scope_acog_ta31'), global.tag.M('plates/brass'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_sight_rmr_dot');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_rmr_dot"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_sight_coyote');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_coyote"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_sight_exp3');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_exp3"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_sight_sro_dot');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_sro_dot"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_sight_t2');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_t2"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_sight_t1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_t1"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_sight_552');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_552"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_scope_retro_2x');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:scope_retro_2x"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_sight_uh1');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:sight_uh1"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_scope_standard_8x');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:scope_standard_8x"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_scope_elcan_4x');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:scope_elcan_4x"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_scope_lpvo_1_6');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:scope_lpvo_1_6"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_scope_acog_ta31');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:scope_acog_ta31"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gems/amethyst')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
