ServerEvents.recipes(event => {
	const foods = new Map([
		[global.id.MC('beef'), global.id.MC('cooked_beef')],
		[global.id.MC('potato'), global.id.MC('baked_potato')],
		[global.id.MC('salmon'), global.id.MC('cooked_salmon')],
		[global.id.MC('rabbit'), global.id.MC('cooked_rabbit')],
		[global.id.MC('mutton'), global.id.MC('cooked_mutton')],
		[global.id.MC('kelp'), global.id.MC('dried_kelp')],
		[global.id.MC('cod'), global.id.MC('cooked_cod')],
		[global.id.MC('porkchop'), global.id.MC('cooked_porkchop')],
		[global.id.MC('chicken'), global.id.MC('cooked_chicken')]
	]);

	for(const [raw, cooked] of foods) {
		event.remove({
			type: global.id.MC('smelting'),
			input: raw,
			output: cooked
		});
	}
});
