// priority: 0

global.recipes = {
	itemWithCount: (item, count) => {
		const itemObject = {};

		if(item.startsWith('#')) {
			itemObject.tag = item.slice(1);
		}else {
			itemObject.item = item;
		}

		if (count > 1) {
			itemObject.count = count;
		}

		return itemObject;
	},
	FD: {
		cutting: (input, output, tool) => {
			return {
				type: global.id.FD('cutting'),
				ingredients: input,
				result: output,
				tool: tool
			};
		},
		cooking: (time, experience, input, output) => {
			return {
				type: global.id.FD('cooking'),
				cookingtime: time,
				experience: experience,
				ingredients: input,
				result: output
			};
		}
	}
}
