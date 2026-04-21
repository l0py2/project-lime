ServerEvents.recipes(event => {
	event.remove({ id: 'create:crafting/kinetics/encased_chain_drive' });
	event.remove({ id: 'create:crafting/kinetics/encased_chain_drive_from_zinc' });
	event.shapeless(
		'create:encased_chain_drive',
		[
			'create:andesite_casing',
			'#c:chains'
		],
	);
});