//priority: 99

global.itemWithCount = (item, count) => {
	const itemObject = {};

	if(item.startsWith('#')) {
		itemObject.tag = item.slice(1);
	} else {
		itemObject.item = item;
	}

	if(count > 1) {
		itemObject.count = count;
	}

	return itemObject;
};
