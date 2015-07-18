
ig.module(
    'game.modules.menus'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({	
		showTitle: function() {
			this.scene = 'title';
			this.resetGame();
			this.loadLevel(ig.global.LevelTitle);
		},		
		showGameOver: function() {
			ig.game.scene = 'gameover';
			this.resetGame();
			ig.game.loadLevel(ig.global.LevelGameover);
		}
	});  
});
