
ig.module(
    'game.modules.selectcharacter'
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
		selectCharacter: function(character) {
			config.character = character
			this.character = config.characters[character];			
		},
		update: function() {
			this.parent();
			if (ig.game.scene != 'selectcharacter') return;

			if( ig.input.pressed('click') ) {
				ig.system.clear();
				//ig.game.unloadLevel();
				this.startGame('Level1');
			}
		},
		draw: function() {
			this.parent();
			if (ig.game.scene != 'selectcharacter') return;
			
			this.font.draw( 'Select Character', 50,100 );
		}   
	});  
});
