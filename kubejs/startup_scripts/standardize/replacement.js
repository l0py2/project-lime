//priority: 98

global.inputReplacements = new Map([
	[global.id.MC('furnace'), global.id.MC('blast_furnace')],
	[global.id.FD('rope'), global.tag.M('rope')],
	[global.id.CA('copper_spool'), global.id.PG('copper_coil')],
	[global.id.SG('lightning_battery'), global.id.PG('battery')],
	[global.id.CA('capacitor'), global.id.PG('capacitor')],
	[global.id.CR('dough'), global.tag.M('dough/wheat')]
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