ServerEvents.recipes(event => {
	event.stonecutting(global.id.KJ('incomplete_scope_aug_default'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_p90'), global.tag.M('gems/amethyst'));

	event.recipes.create.mechanical_crafting(
		Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_1873_6x"}'),
		[
			'AAA',
			'BCC',
			'AAA'
		],
		{
			A: global.tag.M('plates/brass'),
			B: global.id.MC('glass_pane'),
			C: global.tag.M('gems/amethyst')
		}
	);

	event.stonecutting(global.id.KJ('incomplete_scope_contender'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_scope_standard_8x'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_scope_vudu'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_scope_mk5hd'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_scope_elcan_4x'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_scope_lpvo_1_6'), global.tag.M('gems/amethyst'));

	event.stonecutting(global.id.KJ('incomplete_scope_retro_2x'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_scope_acog_ta31'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_uh1'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_scope_hamr'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_552'), global.tag.M('gems/amethyst'));

	event.stonecutting(global.id.KJ('incomplete_sight_coyote'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_fastfire_rifle'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_acro_rifle'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_okp7'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_t2'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_t1'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_deltapoint_rifle'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_pk06_rifle'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_rmr_dot'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_pk06_pistol'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_srs_02'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_sro_dot'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_deltapoint_pistol'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_acro_pistol'), global.tag.M('gems/amethyst'));
	event.stonecutting(global.id.KJ('incomplete_sight_fastfire_pistol'), global.tag.M('gems/amethyst'));

	function level3Sight(sightName) {
		event.recipes.create.mechanical_crafting(
			Item.of('tacz:attachment', `{AttachmentId:"tacz:${sightName}"}`),
			[
				' BBBB',
				' CDDD',
				'ABBBB'
			],
			{
				A: global.id.KJ(`incomplete_${sightName}`),
				B: global.tag.M('plates/desh'),
				C: global.id.MC('glass_pane'),
				D: global.tag.M('gems/amethyst')
			}
		);
	}

	function level2Sight(sightName) {
		event.recipes.create.mechanical_crafting(
			Item.of('tacz:attachment', `{AttachmentId:"tacz:${sightName}"}`),
			[
				' BBB',
				' CDD',
				'ABBB'
			],
			{
				A: global.id.KJ(`incomplete_${sightName}`),
				B: global.tag.M('plates/steel'),
				C: global.id.MC('glass_pane'),
				D: global.tag.M('gems/amethyst')
			}
		);
	}

	function level1Sight(sightName) {
		event.recipes.create.mechanical_crafting(
			Item.of('tacz:attachment', `{AttachmentId:"tacz:${sightName}"}`),
			[
				' BB',
				' CD',
				'ABB'
			],
			{
				A: global.id.KJ(`incomplete_${sightName}`),
				B: global.tag.M('plates/compressed_iron'),
				C: global.id.MC('glass_pane'),
				D: global.tag.M('gems/amethyst')
			}
		);
	}

	level3Sight('scope_contender');
	level3Sight('scope_contender');
	level3Sight('scope_standard_8x');
	level3Sight('scope_vudu');
	level3Sight('scope_mk5hd');
	level3Sight('scope_elcan_4x');
	level3Sight('scope_lpvo_1_6');
	level2Sight('scope_retro_2x');
	level2Sight('scope_acog_ta31');
	level2Sight('sight_uh1');
	level2Sight('scope_hamr');
	level2Sight('sight_552');
	level1Sight('sight_coyote');
	level1Sight('sight_fastfire_rifle');
	level1Sight('sight_acro_rifle');
	level1Sight('sight_okp7');
	level1Sight('sight_t2');
	level1Sight('sight_t1');
	level1Sight('sight_deltapoint_rifle');
	level1Sight('sight_pk06_rifle');
	level1Sight('sight_rmr_dot');
	level1Sight('sight_pk06_pistol');
	level1Sight('sight_srs_02');
	level1Sight('sight_sro_dot');
	level1Sight('sight_deltapoint_pistol');
	level1Sight('sight_acro_pistol');
	level1Sight('sight_fastfire_pistol');
});
