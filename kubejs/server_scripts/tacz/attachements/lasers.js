ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_nightstick"}'),
		[
			'ABA',
			'CDC',
			'CEC'
		],
		{
			A: global.tag.M('dyes/black'),
			B: global.tag.M('glass_panes/green'),
			C: global.tag.M('plates/compressed_iron'),
			D: global.id.MC('observer'),
			E: global.id.PC('plastic')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_compact"}'),
		[
			'ABA',
			'CDC',
			'CEC'
		],
		{
			A: global.tag.M('dyes/gray'),
			B: global.tag.M('glass_panes/green'),
			C: global.tag.M('plates/compressed_iron'),
			D: global.id.MC('observer'),
			E: global.id.PC('plastic')
		}
	);

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_lopro"}'),
		[
			'ABC',
			'DED',
			'DFD'
		],
		{
			A: global.tag.M('dyes/yellow'),
			B: global.tag.M('glass_panes/red'),
			C: global.tag.M('dyes/gray'),
			D: global.tag.M('plates/compressed_iron'),
			E: global.id.MC('observer'),
			F: global.id.PC('plastic')
		}
	);
});
