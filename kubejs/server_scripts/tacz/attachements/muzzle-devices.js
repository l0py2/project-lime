ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_ursus"}'),
		[
			'AA',
			'BC',
			'AA'
		],
		{
			A: global.id.MC('gray_wool'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:deagle_golden_long_barrel"}'),
		[
			'A',
			'B',
			'A'
		],
		{
			A: global.tag.M('plates/gold'),
			B: global.tag.M('rods/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_knight_qd"}'),
		[
			'A ',
			'BC',
			'A '
		],
		{
			A: global.id.MC('brown_wool'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_vulture"}'),
		[
			'AAA',
			'CBC',
			'AAA'
		],
		{
			A: global.id.MC('gray_wool'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_compensator_trident"}'),
		[
			'A ',
			'BC',
			'A '
		],
		{
			A: global.id.MC('iron_bars'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:bayonet_6h3"}'),
		[
			'ABC'
		],
		{
			A: global.id.MC('iron_sword'),
			B: global.tag.M('leather'),
			C: global.tag.M('rods/wooden')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_mirage"}'),
		[
			'A',
			'B',
			'A'
		],
		{
			A: global.id.MC('gray_wool'),
			B: global.tag.M('rods/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_trex"}'),
		[
			'AC',
			'CB',
			'AC'
		],
		{
			A: global.id.MC('iron_bars'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_cyclone_d2"}'),
		[
			'AC',
			' B',
			'AC'
		],
		{
			A: global.id.MC('iron_bars'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_pioneer"}'),
		[
			' C',
			'AB',
			' C'
		],
		{
			A: global.id.MC('iron_bars'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_timeless50"}'),
		[
			'A',
			'B',
			'A'
		],
		{
			A: global.tag.M('plates/compressed_iron'),
			B: global.tag.M('rods/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_cthulhu"}'),
		[
			'CAC',
			' B ',
			'CAC'
		],
		{
			A: global.id.MC('iron_bars'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:bayonet_m9"}'),
		[
			'ABC'
		],
		{
			A: global.id.MC('iron_sword'),
			B: global.tag.M('leather'),
			C: global.tag.M('rods/compressed_iron')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_ptilopsis"}'),
		[
			'A ',
			'BC',
			'A '
		],
		{
			A: global.id.MC('gray_wool'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.id.MC('iron_bars')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_phantom_s1"}'),
		[
			'A ',
			'BC',
			'A '
		],
		{
			A: global.id.MC('gray_wool'),
			B: global.tag.M('rods/compressed_iron'),
			C: global.tag.M('plates/compressed_iron'),
		}
	);
});
