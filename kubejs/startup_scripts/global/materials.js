//priority: 99

global.materials = {};

global.materials.metals = [
	{
		name: 'copper',
		ore: global.id.MC('copper_ore'),
		deepslateOre: global.id.MC('deepslate_copper_ore'),
		raw: global.id.MC('raw_copper'),
		rawBlock: global.id.MC('raw_copper_block'),
		crushed: global.id.CR('crushed_raw_copper'),
		nugget: global.id.CR('copper_nugget'),
		ingot: global.id.MC('copper_ingot')
	},
	{
		name: 'iron',
		ore: global.id.MC('iron_ore'),
		deepslateOre: global.id.MC('deepslate_iron_ore'),
		raw: global.id.MC('raw_iron'),
		rawBlock: global.id.MC('raw_iron_block'),
		crushed: global.id.CR('crushed_raw_iron'),
		nugget: global.id.MC('iron_nugget'),
		ingot: global.id.MC('iron_ingot')
	},
	{
		name: 'gold',
		ore: global.id.MC('gold_ore'),
		deepslateOre: global.id.MC('deepslate_gold_ore'),
		raw: global.id.MC('raw_gold'),
		rawBlock: global.id.MC('raw_gold_block'),
		crushed: global.id.CR('crushed_raw_gold'),
		nugget: global.id.MC('gold_nugget'),
		ingot: global.id.MC('gold_ingot')
	},
	{
		name: 'zinc',
		ore: global.id.CR('zinc_ore'),
		deepslateOre: global.id.CR('deepslate_zinc_ore'),
		raw: global.id.CR('raw_zinc'),
		rawBlock: global.id.CR('raw_zinc_block'),
		crushed: global.id.CR('crushed_raw_zinc'),
		nugget: global.id.CR('zinc_nugget'),
		ingot: global.id.CR('zinc_ingot')
	},
	{
		name: 'anthralite',
		ore: global.id.SG('anthralite_ore'),
		deepslateOre: global.id.SG('deepslate_anthralite_ore'),
		raw: global.id.SG('raw_anthralite'),
		rawBlock: global.id.SG('raw_anthralite_block'),
		crushed: global.id.SG('crushed_raw_anthralite'),
		nugget: global.id.SG('anthralite_nugget'),
		ingot: global.id.SG('anthralite_ingot')
	}
];

global.woodTypes = {
	minecraft: [
		'oak',
		'spruce',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
		'mangrove',
		'cherry',
		'crimson',
		'warped',
		'bamboo'
	]
};