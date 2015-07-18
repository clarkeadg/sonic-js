
ig.module(
    'game.modules.fonts'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({	
		font: new ig.Font(config.font)
	});  
});
