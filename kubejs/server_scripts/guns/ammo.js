ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_9mm'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_45acp'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_50ae'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_357'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_12g'), global.tag.M('gunpowder'));

	let incomplete;

	incomplete = global.id.KJ('incomplete_9mm');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:9mm"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_45acp');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:45acp"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_50ae');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:50ae"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_357');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:357mag"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_12g');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:12g"}')
		],
		incomplete,
		[
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);
});
