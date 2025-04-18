ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_9mm'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_45acp'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_50ae'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_357'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_12g'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_762x39'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_556x45'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_40mm'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_rpg_rocket'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_57x28'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_338'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_50bmg'), global.tag.M('gunpowder'));
	event.stonecutting(global.id.KJ('incomplete_30_06'), global.tag.M('gunpowder'));

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
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_762x39');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:762x39"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_556x45');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:556x45"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_40mm');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:40mm"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_rpg_rocket');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:rpg_rocket"}')
		],
		incomplete,
		[
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createFilling(incomplete, [incomplete, Fluid.of(global.id.KJ('liquid_plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_57x28');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:57x28"}')
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

	incomplete = global.id.KJ('incomplete_338');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:338"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_50bmg');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:50bmg"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	incomplete = global.id.KJ('incomplete_30_06');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), '{AmmoId:"tacz:30_06"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);
});
