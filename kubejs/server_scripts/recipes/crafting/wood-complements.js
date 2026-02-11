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
	
	function door(material, input) {
		event.remove({ id: global.id.MC(`${material}_door`) });
		event.shapeless(
			global.id.MC(`${material}_door`),
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
	
	door('iron', global.tag.M('ingots/iron'));
	
	trapdoor('iron', global.tag.M('ingots/iron'));
});