ServerEvents.recipes(event => {

	//Karambit Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:melee', '{Damage:0,MeleeWeaponId:"lrtactical:karambit"}'), [
		'ARR'
	], {
		A: global.id.MC('iron_sword'),
		R: global.tag.M('rods/steel')
	});

	//Dagger Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:melee', '{Damage:0,MeleeWeaponId:"lrtactical:dagger"}'), [
		'ARL'
	], {
		A: global.id.MC('iron_sword'),
		R: global.tag.M('rods/steel'),
		L: global.tag.M('leather'),
	});

	//Baseball Bat Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:melee', '{Damage:0,MeleeWeaponId:"lrtactical:baseball_bat"}'), [
		'ARRL'
	], {
		L: global.tag.M('leather'),
		R: global.tag.M('rods/steel'),
		A: global.id.MC('iron_sword')
	});

	//Flash Shield Recipe

	event.recipes.create.mechanical_crafting(Item.of('lrtactical:flash_shield', '{Damage:0}'), [
		'SGS',
		'SLS',
		'SSS'
	], {
		S: global.tag.M('plates/obsidian'),
		G: global.id.PC('pressure_chamber_glass'),
		L: global.id.MC('redstone_lamp')
	});
});
