//priority: 99

global.recipes = {
	CA: {
		rolling: (input, output) => {
			return {
				type: global.id.CA('rolling'),
				input: input.toJson(),
				result: {
					item: output.getId(),
					count: output.getCount()
				}
			};
		}
	}
}
