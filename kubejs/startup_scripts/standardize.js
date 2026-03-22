//priority: 99

global.removedItems = [
	global.id.CA('alternator'),
	global.id.CA('capacitor'),
	global.id.CA('connector'),
	global.id.CA('copper_spool'),
	global.id.CA('copper_wire'),
	global.id.CA('electric_motor'),
	global.id.CA('electrum_amulet'),
	global.id.CA('electrum_block'),
	global.id.CA('electrum_ingot'),
	global.id.CA('electrum_nugget'),
	global.id.CA('electrum_sheet'),
	global.id.CA('electrum_spool'),
	global.id.CA('electrum_wire'),
	global.id.CA('festive_spool'),
	global.id.CA('gold_spool'),
	global.id.CA('gold_wire'),
	global.id.CA('iron_wire'),
	global.id.CA('large_connector'),
	global.id.CA('modular_accumulator'),
	global.id.CA('portable_energy_interface'),
	global.id.CA('redstone_relay'),
	global.id.CA('seed_oil_bucket'),
	global.id.CA('small_light_connector'),
	global.id.CA('spool'),
	global.id.CA('tesla_coil'),
	global.id.CA('zinc_sheet'),
	global.id.CC('copycat_beam'),
	global.id.CC('copycat_block'),
	global.id.CC('copycat_board'),
	global.id.CC('copycat_box'),
	global.id.CC('copycat_catwalk'),
	global.id.CC('copycat_fence'),
	global.id.CC('copycat_fence_gate'),
	global.id.CC('copycat_slab'),
	global.id.CC('copycat_stairs'),
	global.id.CC('copycat_vertical_step'),
	global.id.CC('copycat_wall'),
	global.id.CR('dough'),
	global.id.DG('chemical_sprayer'),
	global.id.DG('chemical_sprayer_lighter'),
	global.id.DG('chemical_turret'),
	global.id.DG('chip_wood_beam'),
	global.id.DG('chip_wood_block'),
	global.id.DG('chip_wood_slab'),
	global.id.DG('chip_wood_stairs'),
	global.id.DG('entity_filter'),
	global.id.DG('hammer'),
	global.id.DG('kelp_handle'),
	global.id.DG('mold'),
	global.id.DG('oil_barrel'),
	global.id.DG('sheet_metal_panel'),
	global.id.DG('track_layers_bag'),
	global.id.DG('wire_cutters'),
	global.id.DG('wood_chip'),
	global.id.FD('rope'),
	global.id.HC('oven'),
	global.id.MC('furnace'),
	global.id.NA('advanced_energiser'),
	global.id.NA('advanced_motor'),
	global.id.NA('advanced_motor_extension'),
	global.id.NA('basic_energiser'),
	global.id.NA('basic_motor'),
	global.id.NA('basic_motor_extension'),
	global.id.NA('blank_circuit'),
	global.id.NA('carbon_brushes'),
	global.id.NA('copper_circuit'),
	global.id.NA('copper_wire'),
	global.id.NA('copper_wire_block'),
	global.id.NA('electrical_connector'),
	global.id.NA('fluxuated_magnetite'),
	global.id.NA('generator_coil'),
	global.id.NA('layered_magnet'),
	global.id.NA('magnetite_block'),
	global.id.NA('netherite_magnet'),
	global.id.NA('overcharged_diamond'),
	global.id.NA('overcharged_diamond_wire'),
	global.id.NA('overcharged_diamond_wire_block'),
	global.id.NA('overcharged_gold'),
	global.id.NA('overcharged_golden_sheet'),
	global.id.NA('overcharged_golden_wire'),
	global.id.NA('overcharged_golden_wire_block'),
	global.id.NA('overcharged_iron_sheet'),
	global.id.NA('overcharged_iron_wire'),
	global.id.NA('overcharged_iron_wire_block'),
	global.id.NA('redstone_magnet'),
	global.id.NA('reinforced_motor'),
	global.id.QK('limestone_bricks'),
	global.id.QK('limestone_bricks_slab'),
	global.id.QK('limestone_bricks_stairs'),
	global.id.QK('limestone_bricks_wall'),
	global.id.SG('air_canister'),
	global.id.SG('lightning_battery'),
	global.id.SG('powered_macerator'),
	global.id.SG('powered_mechanical_press'),
	global.id.SG('reinforced_air_canister'),
	global.id.SP('createdieselgenerators/sign_post_chip_wood'),
	global.id.SS('createdieselgenerators/item_shelf_chip_wood'),
	global.id.WW('sawmill')
];

for(const type of global.woodTypes.minecraft) {
	global.removedItems.push(global.id.QK(`${type}_chest`));
	global.removedItems.push(global.id.QK(`${type}_trapped_chest`));
}

for(const type of global.woodTypes.quark) {
	global.removedItems.push(global.id.EC(`abnww/quark/trapped_${type}_chest`));
}

for(const type of global.toolTypes.minecraft) {
	global.removedItems.push(global.id.TC(`${type}_knife`));
}

for(const type of global.toolTypes.thermal) {
	global.removedItems.push(global.id.TC(`${type}_shovel`));
	global.removedItems.push(global.id.TC(`${type}_pickaxe`));
	global.removedItems.push(global.id.TC(`${type}_axe`));
	global.removedItems.push(global.id.TC(`${type}_hoe`));
	global.removedItems.push(global.id.TC(`${type}_sword`));
	global.removedItems.push(global.id.TC(`${type}_excavator`));
	global.removedItems.push(global.id.TC(`${type}_hammer`));
	global.removedItems.push(global.id.TC(`${type}_sickle`));
	global.removedItems.push(global.id.TC(`${type}_knife`));
}

global.removedRecipeTypes = [
	global.id.WW('sawmill'),
	global.id.SG('lightning_battery'),
	global.id.SG('powered_macerating'),
	global.id.SG('powered_mechanical_pressing'),
	global.id.DG('compression_molding'),
	global.id.DG('wire_cutting'),
	global.id.DG('hammering')
];

global.removedRecipes = [
	global.id.MC('iron_nugget_from_blasting'),
	global.id.MC('gold_nugget_from_blasting'),
	global.id.CC('crafting/dough_1'),
	global.id.CC('crafting/dough_2'),
	global.id.CC('crafting/dough_3'),
	global.id.CR('crafting/appliances/dough'),
	global.id.DF('food/wheat_dough_from_flour_and_eggs'),
	global.id.DF('food/wheat_dough_from_flour_and_water'),
	global.id.FD('wheat_dough_from_egg'),
	global.id.FD('wheat_dough_from_eggs'),
	global.id.FD('wheat_dough_from_water'),
	global.id.CR('smoking/bread'),
	global.id.CR('campfire_cooking/bread'),
	global.id.CA('compacting/seed_oil'),
	global.id.NA('shaped/reinforced_energiser')
];

global.inputReplacements = new Map([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')],
	[global.id.FD('rope'), global.id.SP('rope')],
	[global.id.CA('copper_spool'), global.id.PG('copper_coil')],
	[global.id.SG('lightning_battery'), global.id.PG('battery')],
	[global.id.CA('capacitor'), global.id.PG('capacitor')],
]);

global.outputReplacements = new Map([
	[global.id.FD('rope'), global.id.SP('rope')],
	[global.id.CR('dough'), global.id.FD('wheat_dough')],
	[global.id.CA('tesla_coil'), global.id.NA('reinforced_energiser')]
]);

global.dropReplacements = new Map([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')],
	[global.id.FD('rope'), global.id.SP('rope')]
]);

for(const type of global.woodTypes.minecraft) {
	global.dropReplacements.set(
		global.id.QK(`${type}_chest`),
		global.id.WW(`${type}_chest`)
	);
	global.dropReplacements.set(
		global.id.QK(`${type}_trapped_chest`),
		global.id.WW(`trapped_${type}_chest`)
	);
}