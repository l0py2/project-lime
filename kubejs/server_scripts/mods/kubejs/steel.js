ServerEvents.recipes(event => {
	potato.recipes.applyEvent(event);
	
	event.shapeless(
		'kubejs:steel_nugget',
		['#c:ingots/steel']
	);
	
	event.shaped(
		'kubejs:steel_ingot',
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: '#c:nuggets/steel'
		}
	);
	
	event.shapeless(
		'kubejs:steel_ingot',
		['#c:storage_blocks/steel']
	);
	
	event.shaped(
		'kubejs:steel_block',
		[
			'AAA',
			'AAA',
			'AAA'
		],
		{
			A: '#c:ingots/steel'
		}
	);

	potato.event.create_pressing('#c:ingots/steel', 'kubejs:steel_sheet');
});