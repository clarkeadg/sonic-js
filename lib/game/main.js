
ig.module(
    'game.main'
)
.requires(
    'plusplus.core.plusplus',
	
    /** Modules */
	'game.modules.title',
	'game.modules.selectcharacter',
	'game.modules.selectlevel',
	'game.modules.gameover',
	'game.modules.hud',
	'game.modules.sound',
	'game.modules.inputs',
	'game.modules.fonts',
	'game.modules.lights',
	'game.modules.menus',
	'game.modules.character',
	'game.modules.level',
	'game.modules.player',
	'game.modules.game',
	
	/** Levels */
	'game.levels.title',
	'game.levels.selectcharacter',
	'game.levels.selectlevel',
	'game.levels.gameover',
	'game.levels.1'
)
.defines(function () {

	var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({
		scene: 'title',
		init: function () {		
			this.parent();		
			this.showTitle();
			this.initMusic();
		}						
	});

	ig.main(
		'#canvas',
		ig.app,
		60,
		_c.GAME_WIDTH,
		_c.GAME_HEIGHT,
		_c.SCALE,
		ig.LoaderExtended
	);
});
