ServerEvents.recipes(event => {
	
	event.replaceInput(
		{output: global.id.AA('jet_suit')},
		global.id.AA('etrionic_capacitor'),
		global.id.IE('capacitor_mv')
	);
});