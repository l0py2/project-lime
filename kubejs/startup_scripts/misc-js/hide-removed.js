//priority: -1

for(const tab of Utils.getRegistryIds('creative_mode_tab')) {
	StartupEvents.modifyCreativeTab(tab, event => {
		for(const removedItem of global.removedItems) {
			event.remove(removedItem);
		}
	});
}