
ig.module(
    'game.modules.game'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({	
		startGame: function(level) {
			this.scene = 'game';
			this.selectCharacter(config.character);
			if(this.player) {
				this.player.lives = 1;
				this.player.health = 3;
			}
			this.loadLevel(ig.global[level]);
			this.camera._snap = true;		
			this.initHUD();			
			if (this.music_enabled) this.initMusic();
			if (this.grid_enabled) this.initGrid();
		},
		resetGame: function() {
			this.camera._snap = false;
			this.camera.pause();
		}
	});  
});
