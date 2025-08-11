ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_ripstock"}'),
		[
			'AAB',
			' CB',
			' BB'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_m4ss"}'),
		[
			'AAB',
			'BCB',
			'  B'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_militech_b5"}'),
		[
			'AAB',
			'BCB'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_hk_slim_line"}'),
		[
			'AAB',
			' BB',
			' C '
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_tactical_ar"}'),
		[
			'AAB',
			'CAB'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_sba3"}'),
		[
			'AAB',
			' CB'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_moe"}'),
		[
			'AAB',
			'BBB',
			'C  '
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_carbon_bone_c5"}'),
		[
			'AAB',
			' CB',
			'  B'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:stock_ak12"}'),
		[
			'AAB',
			' BB'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:oem_stock_heavy"}'),
		[
			'AAB',
			'CBB'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:oem_stock_light"}'),
		[
			'AAB',
			'C B'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of(global.id.TZ('attachment'), '{AttachmentId:"tacz:oem_stock_tactical"}'),
		[
			'BAA',
			' BB'
		],
		{
			A: global.tag.M('rods/compressed_iron'),
			B: global.id.PC('plastic')
		}
	);
});
