//priority: 96

(() => {
// Used "/kubejs dump_registry minecraft:creativ_mode_tab" to get all creative tabs
const creativeTabs = [
	'minecraft:building_blocks',
	'minecraft:colored_blocks',
	'minecraft:natural_blocks',
	'minecraft:functional_blocks',
	'minecraft:redstone_blocks',
	'minecraft:hotbar',
	'minecraft:search',
	'minecraft:tools_and_utilities',
	'minecraft:combat',
	'minecraft:food_and_drinks',
	'minecraft:ingredients',
	'minecraft:spawn_eggs',
	'minecraft:op_blocks',
	'minecraft:inventory',
	'immersive_aircraft:immersive_aircraft',
	'immersive_machinery:immersive_machinery',
	'sophisticatedbackpacks:main',
	'createdieselgenerators:cdg_creative_tab',
	'railways:main',
	'railways:tracks',
	'railways:palettes',
	'create_new_age:tab',
	'exposure:exposure',
	'create_connected:main',
	'farmersdelight:farmersdelight',
	'handcrafted:main',
	'scguns:scorched_guns_tab',
	'scguns:scorched_items_tab',
	'scguns:scorched_blocks_tab',
	'copycats:main',
	'copycats:functional',
	'itemfilters:default',
	'powergrid:main',
	'tools_complement:tools_complement',
	'ftbquests:default',
	'immersiveengineering:main',
	'create_aquatic_ambitions:base',
	'brewinandchewin:brewinandchewin',
	'farmersrespite:main',
	'jaopca:tab',
	'kubejs:tab',
	'miners_delight:miners_delight',
	'create:base',
	'create:palettes',
	'create_central_kitchen:base',
	'create_enchantment_industry:base',
	'createaddition:main'
];

for(const tab of creativeTabs) {
	StartupEvents.modifyCreativeTab(tab, event => {
		for(const hiddenItem of global.hiddenItems) {
			event.remove(hiddenItem);
		}
		
		for(const removedItem of global.removedItems) {
			event.remove(removedItem);
		}
	});
}
})();