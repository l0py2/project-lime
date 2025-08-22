ServerEvents.recipes(event => {
	
	event.replaceInput(
		{output: global.id.AA('coal_generator')},
		global.tag.M('ingots/iron'),
		global.tag.M('plates/iron')
	);
	
	event.replaceInput(
		{output: global.id.AA('gravity_normalizer')},
		global.id.AA('etrionic_capacitor'),
		global.id.IE('capacitor_hv')
	);
});