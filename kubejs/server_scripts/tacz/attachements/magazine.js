ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_1"}'),
		[
			'A A',
			'A A',
			'AAA'
		],
		{
			A: global.tag.M('plates/obsidian')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_2"}'),
		[
			'A A',
			'A A',
			'A A',
			'AAA'
		],
		{
			A: global.tag.M('plates/obsidian'),
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_3"}'),
		[
			'A A',
			'A A',
			'A A',
			'A A',
			'AAA'
		],
		{
			A: global.tag.M('plates/obsidian'),
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_1"}'),
		[
			'A A',
			'A A',
			'BAB'
		],
		{
			A: global.tag.M('plates/iron'),
			B: global.tag.M('plates/obsidian')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_2"}'),
		[
			'A A',
			'A A',
			'A A',
			'BAB'
		],
		{
			A: global.tag.M('plates/iron'),
			B: global.tag.M('plates/obsidian')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_3"}'),
		[
			'A A',
			'A A',
			'A A',
			'A A',
			'BAB'
		],
		{
			A: global.tag.M('plates/iron'),
			B: global.tag.M('plates/obsidian')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_1"}'),
		[
			'A A',
			'A A',
			'AAA'
		],
		{
			A: global.tag.M('plates/iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_2"}'),
		[
			'A A',
			'A A',
			'A A',
			'AAA'
		],
		{
			A: global.tag.M('plates/iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_3"}'),
		[
			'A A',
			'A A',
			'A A',
			'A A',
			'AAA'
		],
		{
			A: global.tag.M('plates/iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_i"}'),
		[
			'A A',
			'ABA',
			'AAA'
		],
		{
			A: global.tag.M('plates/obsidian'),
			B: global.id.MC('magma_block')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_he"}'),
		[
			'A A',
			'ABA',
			'AAA'
		],
		{
			A: global.tag.M('plates/obsidian'),
			B: global.id.MC('tnt')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_hp"}'),
		[
			'A A',
			'ABA',
			'ABA',
			'ABA',
			'AAA'
		],
		{
			A: global.tag.M('plates/obsidian'),
			B: global.tag.M('plates/brass')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_fmj"}'),
		[
			'A A',
			'ABA',
			'ABA',
			'ABA',
			'AAA'
		],
		{
			A: global.tag.M('plates/obsidian'),
			B: global.tag.M('plates/steel')
		}
	);
});
