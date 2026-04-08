//priority: 49

(() => {
	
const toolTypes = {
	minecraft: [
		'copper',
		'iron',
		'gold',
		'diamond',
		'netherite'
	],
	thermal: [
		'tin',
		'lead',
		'silver',
		'nickel',
		'bronze',
		'electrum',
		'invar',
		'constantan'
	]
};

for(const type of toolTypes.minecraft) {
	global.removedItems.push(global.id.TC(`${type}_knife`));
}

for(const type of toolTypes.thermal) {
	global.removedItems.push(global.id.TC(`${type}_shovel`));
	global.removedItems.push(global.id.TC(`${type}_pickaxe`));
	global.removedItems.push(global.id.TC(`${type}_axe`));
	global.removedItems.push(global.id.TC(`${type}_hoe`));
	global.removedItems.push(global.id.TC(`${type}_sword`));
	global.removedItems.push(global.id.TC(`${type}_excavator`));
	global.removedItems.push(global.id.TC(`${type}_hammer`));
	global.removedItems.push(global.id.TC(`${type}_sickle`));
	global.removedItems.push(global.id.TC(`${type}_knife`));
	global.removedItems.push(global.id.TC(`${type}_helmet`));
	global.removedItems.push(global.id.TC(`${type}_chestplate`));
	global.removedItems.push(global.id.TC(`${type}_leggings`));
	global.removedItems.push(global.id.TC(`${type}_boots`));
}
})();