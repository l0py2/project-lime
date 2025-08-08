ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_9mm'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_45acp'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_50ae'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_357mag'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_12g'), global.tag.PC('plastic_sheets'));
	event.stonecutting(global.id.KJ('incomplete_762x39'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_556x45'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_40mm'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_rpg_rocket'), global.tag.PC('plastic_sheets'));
	event.stonecutting(global.id.KJ('incomplete_57x28'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_338'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_50bmg'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_30_06'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_45_70'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_308'), global.tag.M('plates/brass'));
	event.stonecutting(global.id.KJ('incomplete_58x42'), global.tag.M('plates/brass'));

	let incomplete

	//.50BMG Recipe

	incomplete = global.id.KJ('incomplete_50bmg');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 4, '{AmmoId:"tacz:50bmg"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/desh')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//.338 Lapua Recipe

	incomplete = global.id.KJ('incomplete_338');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 4, '{AmmoId:"tacz:338"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/desh')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//.30_06 Recipe

	incomplete = global.id.KJ('incomplete_30_06');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 8, '{AmmoId:"tacz:30_06"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/steel')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//45_70 Recipe

	incomplete = global.id.KJ('incomplete_45_70');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 16, '{AmmoId:"tacz:45_70"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/copper')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//5.56x45 Recipe

	incomplete = global.id.KJ('incomplete_556x45');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 16, '{AmmoId:"tacz:556x45"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//5.8mm Recipe

	incomplete = global.id.KJ('incomplete_58x42');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 16, '{AmmoId:"tacz:58x42"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//.308 Recipe

	incomplete = global.id.KJ('incomplete_308');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 24, '{AmmoId:"tacz:308"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//7.62x39mm Recipe

	incomplete = global.id.KJ('incomplete_762x39');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 24, '{AmmoId:"tacz:762x39"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('ingots/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//5.7x28mm Recipe

	incomplete = global.id.KJ('incomplete_57x28');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 16, '{AmmoId:"tacz:57x28"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//12 Gauge Recipe

	incomplete = global.id.KJ('incomplete_12g');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 4, '{AmmoId:"tacz:12g"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/brass')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//.50AE Recipe

	incomplete = global.id.KJ('incomplete_50ae');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 8, '{AmmoId:"tacz:50ae"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/iron')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//.357 Magnun Recipe

	incomplete = global.id.KJ('incomplete_357mag');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 8, '{AmmoId:"tacz:357mag"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//.45 ACP Recipe

	incomplete = global.id.KJ('incomplete_45acp');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 8,'{AmmoId:"tacz:45acp"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//9mm Recipe

	incomplete = global.id.KJ('incomplete_9mm');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 8, '{AmmoId:"tacz:9mm"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('nuggets/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//40mm Recipe

	incomplete = global.id.KJ('incomplete_40mm');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 4, '{AmmoId:"tacz:40mm"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.PC('plastic_sheets')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('gunpowder')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.tag.M('plates/brass')]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);

	//RPG-7 Grenade Recipe

	incomplete = global.id.KJ('incomplete_rpg_rocket');
	event.recipes.create.sequenced_assembly(
		[
			Item.of(global.id.TZ('ammo'), 2, '{AmmoId:"tacz:rpg_rocket"}')
		],
		incomplete,
		[
			event.recipes.createDeploying(incomplete, [incomplete, Item.of('pneumaticcraft:micromissiles', '{Damage:0}')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createDeploying(incomplete, [incomplete, global.id.MC('tnt')]),
			event.recipes.createFilling(incomplete, [incomplete,  Fluid.of(global.id.PC('plastic'), FluidAmounts.BOTTLE)]),
			event.recipes.createPressing(incomplete, incomplete)
		]
	).transitionalItem(incomplete).loops(1);
});
