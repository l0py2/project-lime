ServerEvents.recipes(event => {
	event.remove({ id: global.id.SG('flechette_from_stonecutting') });
	event.shapeless(
		Item.of(global.id.SG('flechette'), 9),
		[global.tag.SG('advanced_bullet_material')]
	);
	
	event.remove({ id: global.id.SG('empty_tank') });
	event.shaped(
		global.id.SG('empty_tank'),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: global.tag.M('plates/iron'),
			B: global.id.CR('copper_backtank')
		}
	);
});