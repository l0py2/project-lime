ServerEvents.recipes(event => {	

	event.remove({ id: 'minecraft:piston' });
	event.shaped(
		'minecraft:piston',
		[
			'BBB',
			'CDC',
			'CAC'
		],
		{
			A: '#c:dusts/redstone',
			B: '#minecraft:planks',
			C: '#c:cobblestones',
			D: 'create:shaft'
		}
	);
});