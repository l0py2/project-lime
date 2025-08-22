ServerEvents.recipes(event => {
	
	//tier 1
	
	event.shaped(
		Item.of(global.id.AA('steel_engine')),
		[
			'AAA',
			'BJB', 
			' C '
		],
		{
			A: global.tag.M('plates/steel'),
			B: global.tag.M('circuits/crude'),
			C: global.id.CR('propeller'),
			J: global.id.AA('engine_frame')
		}	
	);
	
	//tier 2
	
	event.shaped(
		Item.of(global.id.AA('desh_engine')),
		[
			'DDD',
			'BGB', 
			' C '
		],
		{
			D: global.tag.M('plates/desh'),
			B: global.tag.M('circuits/crude'),
			C: global.id.CR('propeller'),
			G: global.id.AA('steel_engine')
		}	
	);
	
	//tier 3
	
	event.shaped(
		Item.of(global.id.AA('ostrum_engine')),
		[
			'EEE',
			'BHB', 
			' C '
		],
		{
			E: global.tag.M('plates/ostrum'),
			B: global.tag.M('circuits/crude'),
			C: global.id.CR('propeller'),
			H: global.id.AA('desh_engine')
		}	
	);
	
	//tier 4
	
	event.shaped(
		Item.of(global.id.AA('calorite_engine')),
		[
			'FFF',
			'BIB', 
			' C '
		],
		{
			F: global.tag.M('plates/calorite'),
			B: global.tag.M('circuits/crude'),
			C: global.id.CR('propeller'),
			I: global.id.AA('ostrum_engine')
		}	
	);
});