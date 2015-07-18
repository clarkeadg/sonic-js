
ig.module(
    'game.modules.gameover'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({		
		init: function () {		
			this.parent();
		},
		update: function() {
			this.parent();
			if (ig.game.scene != 'gameover') return;

			if( ig.input.pressed('click') ) {
				ig.system.clear();
				ig.game.unloadLevel();
				this.showTitle();
			}
		},
		draw: function() {
			this.parent();
			if (ig.game.scene != 'gameover') return;
			
			this.font.draw( 'Game Over', 20,100 );
		}   
	});  
});
