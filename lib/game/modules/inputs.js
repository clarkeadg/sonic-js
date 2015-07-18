
ig.module(
    'game.modules.inputs'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({	
		inputStart: function () {			
			this.parent();			
			ig.input.bind(ig.KEY.UP_ARROW, 'jump');
			ig.input.bind(ig.KEY.MOUSE1, 'click');
			ig.input.bind(ig.KEY.C, 'shoot');
			ig.input.bind(ig.KEY.X, 'grenade');			
		},		
		inputEnd: function () {			
			this.parent();
			ig.input.unbind(ig.KEY.UP_ARROW, 'jump');
			ig.input.unbind(ig.KEY.C, 'shoot');
			ig.input.unbind(ig.KEY.X, 'grenade');			
		}
	});  
});
