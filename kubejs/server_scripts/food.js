ServerEvents.recipes(event => {
	const foods = new Map([
		[global.id.CD('corn_dough'), global.id.CD('tortilla')],
		[global.id.CD('corn_kernels'), global.id.CD('popcorn')],
		[global.id.CD('glow_squid'), global.id.CD('cooked_squid')],
		[global.id.CD('raw_calamari'), global.id.CD('cooked_calamari')],
		[global.id.CD('squid'), global.id.CD('cooked_squid')],
		[global.id.FD('bacon'), global.id.FD('cooked_bacon')],
		[global.id.FD('chicken_cuts'), global.id.FD('cooked_chicken_cuts')],
		[global.id.FD('cod_slice'), global.id.FD('cooked_cod_slice')],
		[global.id.FD('minced_beef'), global.id.FD('beef_patty')],
		[global.id.FD('mutton_chops'), global.id.FD('cooked_mutton_chops')],
		[global.id.FD('salmon_slice'), global.id.FD('cooked_salmon_slice')],
		[global.id.FD('wheat_dough'), global.id.MC('bread')],
		[global.id.MC('beef'), global.id.MC('cooked_beef')],
		[global.id.MC('chicken'), global.id.MC('cooked_chicken')],
		[global.id.MC('cod'), global.id.MC('cooked_cod')],
		[global.id.MC('egg'), global.id.FD('fried_egg')],
		[global.id.MC('kelp'), global.id.MC('dried_kelp')],
		[global.id.MC('mutton'), global.id.MC('cooked_mutton')],
		[global.id.MC('porkchop'), global.id.MC('cooked_porkchop')],
		[global.id.MC('potato'), global.id.MC('baked_potato')],
		[global.id.MC('rabbit'), global.id.MC('cooked_rabbit')],
		[global.id.MC('salmon'), global.id.MC('cooked_salmon')],
		[global.id.CR('dough'), global.id.MC('bread')]
	]);

	for(const [raw, cooked] of foods) {
		event.remove({
			type: global.id.MC('smelting'),
			input: raw,
			output: cooked
		});
	}
});
