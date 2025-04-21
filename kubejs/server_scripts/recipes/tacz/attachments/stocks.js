ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_oem_stock_tactical'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_oem_stock_light'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_stock_carbon_bone_c5'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_stock_tactical_ar'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_oem_stock_heavy'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_stock_militech_b5'), global.tag.M('plates/brass'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_oem_stock_tactical');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:oem_stock_tactical"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_oem_stock_light');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:oem_stock_light"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_stock_carbon_bone_c5');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_carbon_bone_c5"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_stock_tactical_ar');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_tactical_ar"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_oem_stock_heavy');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:oem_stock_heavy"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('leather')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);

	incomplete = global.id.KJ('incomplete_stock_militech_b5');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_militech_b5"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(5);
});
