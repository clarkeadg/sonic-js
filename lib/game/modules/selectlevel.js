
ig.module(
    'game.modules.selectlevel'
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
			if (ig.game.scene != 'selectlevel') return;

			if( ig.input.pressed('click') ) {
				ig.system.clear();
				//ig.game.unloadLevel();
				this.startGame('Level1');
			}
		},
		draw: function() {
			this.parent();
			if (ig.game.scene != 'selectlevel') return;
			
			this.font.draw( 'Select Level', 50,100 );
		}   
	});  
});
