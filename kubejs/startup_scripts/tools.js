ItemEvents.modification(event => {
	const tools = [
		'minecraft:netherite_axe',
		'minecraft:netherite_pickaxe',
		'minecraft:netherite_shovel',
		'minecraft:netherite_hoe'
	];
	
	for(const tool of tools) {
		event.modify(tool, item => {
			item.attackDamage = 0;
			item.attackSpeed = 0;
		});
	}
});