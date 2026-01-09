//priority: 9

global.cutting = {
	createBaseBlock: (mod, name, material) => {
		return {
			mod: mod,
			name: name,
			material: material == undefined ? name : material
		};
	},
	createBlockVariant: (mod, blockFormat, materialFormat) => {
		return {
			mod: mod,
			blockFormat: blockFormat,
			materialFormat: materialFormat == undefined ? blockFormat : materialFormat
		};
	},
	createBlockType: (mod, name, value) => {
		return {
			mod: mod,
			name: name,
			value: value
		};
	}
};

ServerEvents.recipes(event => {
	event.remove({ type: global.id.MC('stonecutting') });
});