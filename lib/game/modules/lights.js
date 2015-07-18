
ig.module(
    'game.modules.lights'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({	
		shapesPasses: {
			lighting: {
				ignoreClimbable: true,
				discardBoundaryInner: true
			}
		}
	});  
});
