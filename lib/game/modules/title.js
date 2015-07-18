
ig.module(
    'game.modules.title'
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
			if (ig.game.scene != 'title') return;

			if( ig.input.pressed('click') ) {
				ig.system.clear();
				//ig.game.unloadLevel();
				this.startGame('Level2');
			}
		},
		draw: function() {
			this.parent();
			if (ig.game.scene != 'title') return;
			
			this.font.draw( 'Press X or C to Shoot', 50,100 );
		}   
	});  
});
