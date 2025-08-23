ServerEvents.recipes(event => {

	//fusion_reactor_frame
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fusion_reactor_frame'), 4),
		[
			'ABA',
			'BCB',
			'ABA',
		],
		{
			A: global.tag.M('alloys/ultimate'),
			B: global.tag.M('pellets/polonium'),
			C: global.id.MG('fission_reactor_casing')
		}
	);
	
	//fusion_reactor_controller
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fusion_reactor_controller')),
		[
			'FGF',
			'DED',
			'DDD'
		],
		{
			D: global.id.MG('fusion_reactor_frame'),
			E: global.id.MK('basic_chemical_tank'),
			F: global.tag.M('circuits/ultimate'),
			G: global.id.PC('programmable_controller')
		}
	);
	
	//fusion_reactor_port
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fusion_reactor_port'), 2),
		[
			'DDD',
			'HGH',
			'DDD'
		],
		{
			D: global.id.MG('fusion_reactor_frame'),
			G: global.id.PC('programmable_controller'),
			H: global.tag.M('circuits/ultimate')
		}
	);
	
	//fusion_reactor_logic_adapter
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('fusion_reactor_logic_adapter')),
		[
			' J ',
			'JIJ',
			' J '
		],
		{
			I: global.id.MG('fusion_reactor_port'),
			J: global.tag.M('dusts/redstone')
		}
	);
	
	//laser_focus_matrix
	
	event.recipes.create.mechanical_crafting(
	Item.of(global.id.MG('laser_focus_matrix')),
		[
			' L ',
			'LKL',
			' L '
		],
		{
			K: global.id.CR('rose_quartz'),
			L: global.id.MG('reactor_glass')
		}
	);
});