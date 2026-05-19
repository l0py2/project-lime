ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/wooden_bracket' });
	event.stonecutting('4x create:wooden_bracket', '#minecraft:planks');
	
	event.remove({ id: 'create:crafting/kinetics/metal_bracket' });
	event.stonecutting('4x create:metal_bracket', '#c:ingots/iron');
	
	event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' });
	event.stonecutting('4x create:industrial_iron_block', '#c:ingots/iron');
	
	event.remove({ id: 'create:weathered_iron_block_from_ingots_iron_stonecutting' });
	event.stonecutting('4x create:weathered_iron_block', '#c:ingots/iron');
});