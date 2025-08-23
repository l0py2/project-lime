ServerEvents.recipes(event => {
	
	//chemical_dissolution_chamber
	
	event.recipes.create.mechanical_crafting('mekanism:chemical_dissolution_chamber', [
		'DDD',
		'RNR',
		'UCU',
		'RNR',
		'DDD'
	], {
		C: global.id.MK('steel_casing'),
		R: global.tag.M('plates/refined_obsidian'),
		U: global.tag.M('circuits/ultimate'),
		N: global.id.MK('basic_chemical_tank'),
		D: global.tag.M('plates/desh')
	});
	
	//seismic_vibrator
  
	event.recipes.create.mechanical_crafting('mekanism:seismic_vibrator', [
		'SSS',
		'TLT',
		'BCB',
		'TTT',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		C: global.id.MK('steel_casing'),
		T: global.tag.M('plates/tin'),
		B: global.tag.M('circuits/basic'),
		L: global.tag.M('gems/lapis')
	});
	
	//electrolytic_separator
	
	event.recipes.create.mechanical_crafting('mekanism:electrolytic_separator', [
		'SSS',
		'IAI',
		'EFE',
		'IAI',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		I: global.tag.M('plates/iron'),
		A: global.tag.M('dusts/redstone'),
		E: global.tag.M('alloys/advanced'),
		F: global.id.MK('electrolytic_core')
	});
	
	//chemical_infuser
	
	event.recipes.create.mechanical_crafting('mekanism:chemical_infuser', [
		'SSS',
		'EBE',
		'NCN',
		'EBE',
		'SSS'
	], {
		E: global.tag.M('alloys/advanced'),
		B: global.tag.M('circuits/basic'),
		C: global.id.MK('steel_casing'),
		S: global.tag.M('plates/steel'),
		N: global.id.MK('basic_chemical_tank')
	});
	
	//chemical_oxidizer
	
	event.recipes.create.mechanical_crafting('mekanism:chemical_oxidizer', [
		'SSS',
		'EBE',
		'HJN',
		'EBE',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		E: global.tag.M('alloys/advanced'),
		B: global.tag.M('circuits/basic'),
		H: global.tag.M('personal_storage'),
		J: global.id.MK('dynamic_tank'),
		N: global.id.MK('basic_chemical_tank')
	});
	
	//rotary_condensentrator
	
		event.recipes.create.mechanical_crafting('mekanism:rotary_condensentrator', [
		'SSS',
		'GBG',
		'NMK',
		'GBG',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		G: global.tag.M('glass/silica'),
		N: global.id.MK('basic_chemical_tank'),
		B: global.tag.M('circuits/basic'),
		K: global.id.MK('basic_fluid_tank'),
		M: global.tag.M('batteries')
	});
	
	//digital_miner
	
	event.recipes.create.mechanical_crafting('mekanism:digital_miner', [
		'ZZZ',
		'OUO',
		'QYQ',
		'PCP',
		'ZZZ'
	], {
		O: global.tag.M('alloys/ultimate'),
		U: global.tag.M('circuits/ultimate'),
		C: global.id.MK('steel_casing'),
		P: global.id.MK('teleportation_core'),
		Q: global.id.MK('logistical_sorter'),
		Y: global.id.MK('robit'),
		Z: global.tag.M('plates/ostrum')
	});
	
	//chemical_crystallizer
	
	event.recipes.create.mechanical_crafting('mekanism:chemical_crystallizer', [
		'SSS',
		'RVR',
		'UCU',
		'RVR',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		R: global.tag.M('plates/refined_obsidian'),
		U: global.tag.M('circuits/ultimate'),
		C: global.id.MK('steel_casing'),
		V: global.tag.M('gems/fluorite')
	});
	
	//chemical_washer
	
	event.recipes.create.mechanical_crafting('mekanism:chemical_washer', [
		'SSS',
		'RKR',
		'UCU',
		'RNR',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		R: global.tag.M('plates/refined_obsidian'),
		U: global.tag.M('circuits/ultimate'),
		C: global.id.MK('steel_casing'),
		K: global.id.MK('basic_fluid_tank'),
		N: global.id.MK('basic_chemical_tank')
	});
	
	//pressurized_reaction_chamber
	
	event.recipes.create.mechanical_crafting('mekanism:pressurized_reaction_chamber', [
		'SSS',
		'SES',
		'BWB',
		'NJN',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		B: global.tag.M('circuits/basic'),
		J: global.id.MK('dynamic_tank'),
		E: global.tag.M('alloys/advanced'),
		W: global.id.MK('enrichment_chamber'),
		N: global.id.MK('basic_chemical_tank')
	});
	
	//isotopic_centrifuge
	
	event.recipes.create.mechanical_crafting('mekanism:isotopic_centrifuge', [
		'SSS',
		'WWW',
		'UNU',
		'WWW',
		'SSS'
	], {
		S: global.tag.M('plates/steel'),
		N: global.id.MK('basic_chemical_tank'),
		U: global.tag.M('circuits/ultimate'),
		W: global.tag.M('plates/lead')
	});
	
	//dimensional_stabilizer
	
	event.recipes.create.mechanical_crafting('mekanism:dimensional_stabilizer', [
		'RRR',
		'RUR',
		'OXO',
		'RUR',
		'RRR'
	], {
		U: global.tag.M('circuits/ultimate'),
		X: global.tag.M('storage_blocks/diamond'),
		R: global.tag.M('plates/refined_obsidian'),
		O: global.tag.M('alloys/ultimate')
	});
	

});

ServerEvents.recipes(event => {

	//solar_neutron_activator
	
	event.recipes.create.mechanical_crafting('mekanism:solar_neutron_activator', [
		'FFF',
		'DED',
		'CAC',
		'BBB',
		'GGG'
	], {
		A: global.id.MK('steel_casing'),
		B: global.tag.M('plates/bronze'),
		C: global.tag.M('circuits/elite'),
		D: global.tag.M('alloys/elite'),
		E: global.id.MK('hdpe_sheet'),
		F: global.id.MG('solar_generator'),
		G: global.tag.M('storage_blocks/steel')
	});
	
	//electric_pump
	
	event.replaceInput(
	{ 
		output: global.id.MK('electric_pump') 
	},
		global.id.MK('ingot_osmium'),       
		global.tag.M('plates/osmium')      
	);
	
	//radioactive_waste
	
	event.replaceInput(
	{ 
		output: global.id.MK('radioactive_waste_barrel') 
	},
		global.id.MK('ingot_lead'),       
		global.tag.M('plates/lead')      
	);
	
	//radioactive_waste
	
	event.replaceInput(
	{ 
		output: global.id.MK('radioactive_waste_barrel') 
	},
		global.id.MK('ingot_steel'),       
		global.tag.M('plates/steel')      
	);
	
	//bio-generator
	
	event.replaceInput(
	{ 
		output: global.id.MK('bio_generator') 
	},
		global.id.MK('iron_ingot'),       
		global.tag.M('plates/ingot')      
	);
	
	//bio-generator
	
	event.replaceInput(
	{ 
		output: global.id.MK('bio_generator') 
	},
		global.tag.M('dusts/redstone'),       
		global.tag.M('plates/osmium')      
	);
	
	//gas-burning generator
	
	event.replaceInput(
	{ 
		output: global.id.MG('gas_burning_generator') 
	},
		global.tag.M('ingots/osmium'),       
		global.tag.M('plates/osmium')      
	);
	
	//wood-burning heater
	
	event.replaceInput(
	{ 
		output: global.id.MK('fuelwood_heater') 
	},
		global.tag.M('ingots/steel'),       
		global.tag.M('plates/steel')      
	);
	
	//heat generator
	
	event.replaceInput(
	{ 
		output: global.id.MG('heat_generator')
	},
		global.tag.M('ingots/steel'),       
		global.tag.M('plates/steel')      
	);
});