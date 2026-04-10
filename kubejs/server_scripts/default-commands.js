ServerEvents.loaded(event => {
	console.log('Reloading server');
	event.server.runCommandSilent('kubejs reload startup_scripts');
	event.server.runCommandSilent('reload');
	
	event.server.runCommandSilent('gamerule keepInventory true');
	event.server.runCommandSilent('gamerule doPatrolSpawning false');
	event.server.runCommandSilent('gamerule doInsomnia false');
});