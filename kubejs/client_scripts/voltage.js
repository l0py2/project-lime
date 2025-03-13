BlockEvents.rightClicked(event => {
	const isHvConnector = global.hvConnectors.indexOf(event.item.id) != -1;
	const isMvMachine = global.mvMachines.indexOf(event.block.id) != -1;

	if (isHvConnector && isMvMachine) {
		event.player.notify('Voltage too high!');
		event.cancel();
	}
});
