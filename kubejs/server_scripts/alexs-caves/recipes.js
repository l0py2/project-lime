ServerEvents.recipes(event => {
	event.replaceInput(
		[
			{ output: global.id.AC('uranium_rod') },
			{ output: global.id.AC('nuclear_furnace_component') },
			{ output: global.id.AC('nuclear_siren') }
		],
		global.tag.M('raw_materials/uranium'),
		global.tag.M('ingots/uranium')
	);
});
