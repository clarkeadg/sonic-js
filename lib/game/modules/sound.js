
ig.module(
    'game.modules.sound'
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({	
		music_enabled: true,
		initMusic: function() {
			ig.music.add( 'media/sound/music/crusader.ogg' );	
			ig.music.volume = 0.5;
			ig.music.play();	
		}
	});  
});
