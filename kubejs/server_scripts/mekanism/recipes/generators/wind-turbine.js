ServerEvents.recipes(event => {
	
	event.recipes.create.mechanical_crafting(global.id.MG('wind_generator'), [
		'FEF',
		' E ',
		'DCD',
		'DCD',
		'ABA'
	], {
		A: global.id.IE('capacitor_hv'),
		B: global.tag.M('circuits/advanced'),
		C: global.tag.M('alloys/advanced'),
		D: global.tag.M('plates/steel'),
		E: global.tag.M('plates/osmium'),
		F: global.id.PC('turbine_rotor')
	});
	
});