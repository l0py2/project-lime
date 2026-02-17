ServerEvents.recipes(event => {
	event.remove({ id: global.id.SG('flechette_from_stonecutting') });
	event.shapeless(
		Item.of(global.id.SG('flechette'), 9),
		[global.tag.SG('advanced_bullet_material')]
	);
});