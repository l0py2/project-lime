ServerEvents.recipes(event => {
	event.remove({ id: global.id.MC('blast_furnace') });
	event.shaped(
		global.id.MC('blast_furnace'),
		[
			'AAA',
			'ABA',
			'CCC'
		],
		{
			A: global.tag.M('ingots/copper'),
			B: global.id.MC('furnace'),
			C: global.id.MC('smooth_stone')
		}
	);
});
