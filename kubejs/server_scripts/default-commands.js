ServerEvents.loaded(event => {
	console.log('Reloading server');
	event.server.runCommandSilent('kubejs reload startup_scripts');
	event.server.runCommandSilent('reload');
});