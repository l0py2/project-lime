ServerEvents.recipes(event => {

	//Flashbang Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:flash_grenade"}'), [
		'SSS',
		'GPG',
		'SSS'
	], {
		S: global.tag.M('plates/compressed_iron'),
		G: global.id.MC('glowstone'),
		P: global.id.MC('gunpowder')
	});

	//Smoke Grenade Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:smoke_grenade"}'), [
		'SSS',
		'WPW',
		'SSS'
	], {
		S: global.tag.M('plates/compressed_iron'),
		W: global.tag.M('dyes/white'),
		P: global.id.MC('gunpowder')
	});

	//Fragmentation Grenade Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:rgn"}'), [
		'SSS',
		'BPP',
		'SSS'
	], {
		S: global.tag.M('plates/compressed_iron'),
		B: global.tag.MC('stone_buttons'),
		P: global.id.MC('gunpowder')
	});

	//Impact Grenade Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:m67"}'), [
		'SSS',
		'NPP',
		'SSS'
	], {
		S: global.tag.M('plates/compressed_iron'),
		N: global.tag.M('nuggets/iron'),
		P: global.id.MC('gunpowder')
	});

	//Incendiary Grenade Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:molotov"}'), [
		'SSS',
		'HPH',
		'SSS'
	], {
		S: global.tag.M('plates/compressed_iron'),
		H: global.id.MC('blaze_powder'),
		P: global.id.MC('gunpowder')
	});
});
