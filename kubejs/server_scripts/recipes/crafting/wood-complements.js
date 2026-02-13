ServerEvents.recipes(event => {
	function pressurePlate(material, input) {
		event.remove({ id: global.id.MC(`${material}_pressure_plate`) });
		event.shapeless(
			global.id.MC(`${material}_pressure_plate`),
			[
				global.tag.MC('wooden_pressure_plates'),
				input
			]
		);
	}
	
	function button(material, input) {
		event.remove({ id: global.id.MC(`${material}_button`) });
		event.shapeless(
			global.id.MC(`${material}_button`),
			[
				global.tag.MC('wooden_buttons'),
				input
			]
		);
	}
	
	function door(mod, material, input) {
		event.remove({ id: global.id[mod](`${material}_door`) });
		event.shapeless(
			global.id[mod](`${material}_door`),
			[
				global.tag.MC('wooden_doors'),
				input
			]
		);
	}
	
	function trapdoor(material, input) {
		event.remove({ id: global.id.MC(`${material}_trapdoor`) });
		event.shapeless(
			global.id.MC(`${material}_trapdoor`),
			[
				global.tag.MC('wooden_trapdoors'),
				input
			]
		);
	}
	
	pressurePlate('stone', global.id.MC('stone'));
	pressurePlate('polished_blackstone', global.id.MC('polished_blackstone'));
	pressurePlate('heavy_weighted', global.tag.M('ingots/iron'));
	pressurePlate('light_weighted', global.tag.M('ingots/gold'));
	
	button('stone', global.id.MC('stone'));
	button('polished_blackstone', global.id.MC('polished_blackstone'));
	
	door('MC', 'iron', global.tag.M('ingots/iron'));
	door('SP', 'gold', global.tag.M('ingots/gold'));
	
	trapdoor('iron', global.tag.M('ingots/iron'));
	
	event.remove({ id: global.id.SP('iron_gate') });
	event.shapeless(
		global.id.SP('iron_gate'),
		[
			global.tag.MC('fence_gates'),
			global.tag.M('ingots/iron')
		]
	);
});