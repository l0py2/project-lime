ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_td"}'),
		[
			' A ',
			'ABC',
			' A '
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_se_5"}'),
		[
			' A ',
			'ABC',
			' AA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_rk1_b25u"}'),
		[
			'CBC',
			'ABA',
			'ABA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_ranger"}'),
		[
			'DAC',
			'ABA',
			'ABA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather'),
			D: global.id.MC('redstone_lamp')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_military"}'),
		[
			'ACA',
			'ABA',
			'ABA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_talon"}'),
		[
			' C ',
			'ABA',
			' A '
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_osovets_black"}'),
		[
			' C ',
			'ABA',
			'ABA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_rk0"}'),
		[
			' AC',
			'ABA',
			'ABA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_magpul_afg_2"}'),
		[
			'ABB',
			'CAA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_rk6"}'),
		[
			'AB',
			'CA'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_cobra"}'),
		[
			'ABB',
			'AAA',
			'  C'
		],
		{
			A: global.id.PC('plastic'),
			B: global.tag.M('plates/compressed_iron'),
			C: global.tag.M('leather')
		}
	);
});
