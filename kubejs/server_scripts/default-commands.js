ServerEvents.loaded(event => {
	event.server.runCommandSilent('gamerule keepInventory true');
	event.server.runCommandSilent('gamerule doPatrolSpawning false');
	event.server.runCommandSilent('gamerule doInsomnia false');
});