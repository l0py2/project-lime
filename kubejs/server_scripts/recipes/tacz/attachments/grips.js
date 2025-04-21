ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_grip_vertical_talon'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_grip_vertical_military'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_grip_vertical_ranger'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_grip_magpul_afg_2'), global.tag.M('plates/brass'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_grip_vertical_talon');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:grip_vertical_talon"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_grip_vertical_military');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:grip_vertical_military"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_grip_vertical_ranger');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:grip_vertical_ranger"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_grip_magpul_afg_2');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:grip_magpul_afg_2"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
