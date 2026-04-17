ServerEvents.loaded(event => {
	// Force a reload to load every creative tab
	console.log('Reloading server');
	event.server.runCommandSilent('kubejs reload startup_scripts');
	event.server.runCommandSilent('reload');
});