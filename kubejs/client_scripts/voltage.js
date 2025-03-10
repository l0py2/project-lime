BlockEvents.rightClicked(event => {
	const hvConnectors = [
		global.id.IE('connector_hv'),
		global.id.IE('capacitor_hv')
	];

	const hvBlacklist = [
		global.id.IE('metal_press')
	];

	const isHvConnector = hvConnectors.indexOf(event.item.id) != -1;
	const onHvBlacklist = hvBlacklist.indexOf(event.block.id) != -1;

	if (isHvConnector && onHvBlacklist) {
		event.player.notify('Voltage too high!');

		event.cancel();
	}
});
