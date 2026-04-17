LootJS.modifiers(event => {
	for(const material of global.materials.metals) {
		event.addBlockLootModifier(material.ore)
			.removeLoot(Ingredient.all)
			.addLoot(material.ore);
		
		event.addBlockLootModifier(material.deepslateOre)
			.removeLoot(Ingredient.all)
			.addLoot(material.deepslateOre);
	}
});

ServerEvents.recipes(event => {
	for(const material of global.materials.metals) {
		event.remove({ input: material.ore });
		event.remove({ input: material.deepslateOre });
		event.remove({ input: material.raw });
		event.remove({ input: material.rawBlock });
		event.remove({ input: material.crushed });
		
		event.blasting(material.ingot, material.ore).xp(1);
		event.blasting(material.ingot, material.deepslateOre).xp(1);
		
		event.recipes.create.milling(
			[
				material.raw,
				Item.of(material.raw).withChance(0.5),
				Item.of(global.id.CR('experience_nugget')).withChance(0.25),
				Item.of(global.id.MC('cobblestone')).withChance(0.5)
			],
			material.ore
		);
		
		event.recipes.create.milling(
			[
				Item.of(material.raw, 2),
				Item.of(material.raw).withChance(0.5),
				Item.of(global.id.CR('experience_nugget')).withChance(0.25),
				Item.of(global.id.MC('cobbled_deepslate')).withChance(0.5)
			],
			material.deepslateOre
		);
		
		event.shaped(
			material.rawBlock,
			[
				'AAA',
				'AAA',
				'AAA'
			],
			{
				A: material.raw
			}
		);
		
		event.shapeless(
			Item.of(material.raw, 9),
			material.rawBlock
		);
		
		event.blasting(material.ingot, material.raw).xp(1);
		
		event.recipes.create.crushing(
			[
				material.crushed,
				Item.of(material.crushed).withChance(0.5),
				Item.of(global.id.CR('experience_nugget')).withChance(0.5)
			],
			material.raw
		);
		
		event.blasting(material.ingot, material.crushed).xp(1);
		
		event.recipes.create.splashing(
			[
				Item.of(material.nugget, 18),
				Item.of(material.nugget, 9).withChance(0.5)
			],
			material.crushed
		);
	}
});