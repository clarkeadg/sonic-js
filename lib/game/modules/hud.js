
ig.module(
    'game.modules.hud'
)
.requires(
	'plusplus.core.plusplus',
	'plusplus.ui.ui-toggle-pause',
	'plugins.notifications.notification-manager'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;

	ig.app = ig.GameExtended = ig.GameExtended.extend({
		myNoteMgr: new ig.NotificationManager(),
		heartFull: new ig.Image( config.characters[config.character].hud.heartFull ),
		heartEmpty: new ig.Image( config.characters[config.character].hud.heartEmpty ),
		coinIcon: new ig.Image( config.characters[config.character].hud.coinIcon ),
		fcoinIcon: new ig.Image( config.characters[config.character].hud.fcoinIcon ),
		playerIcon: new ig.Image( config.characters[config.character].hud.playerIcon ),
		init: function () {		
			this.parent();
			ig.game.myNoteMgr = this.myNoteMgr;
		},
		initHUD: function () {		
			var togglePause = this.spawnEntity( ig.UITogglePause, 0, 0, {
				// position to top left
				posPct: { x: 0, y: 0 },
				// set the margin
				marginAsPct: false,
				margin: { x: 20, y: 20 }
			} );			
		},
		update: function() {
			this.parent();
			if (ig.game.scene != 'game') return;

			this.myNoteMgr.update();
		},
		draw: function() {
			this.parent();
			if (ig.game.scene != 'game') return;

			this.myNoteMgr.draw();

			if(this.player) {
				var x = 24, 
					y = 8;

				// hearts
				for( var i = 0; i < this.player.maxHealth; i++ ) {

					if( this.player.health > i ) {
						this.heartFull.draw( x, y );
					}
					else {
						this.heartEmpty.draw( x, y );	
					}

					x += this.heartEmpty.width + 4;
				}				

				// coins
				x += 4;
				this.coinIcon.drawTile( x, y, 0, 8 );
				x += 12;
				this.font.draw( 'x ' + this.player.coins, x, y-2 )
				
				x += 30;
				this.fcoinIcon.drawTile( x, y, 0, 8 );
				x += 12;
				this.font.draw( 'x ' + this.player.fcoins, x, y-2 )
				
				// lives
				x += 30;
				this.playerIcon.drawTile( x, y-4, 0, 16 );
				x += 16;
				this.font.draw( 'x ' + this.player.lives, x, y-2 )

				// score
				x += 40;
				this.font.draw( '' + this.player.score, x, y-2 )
			}
		}   
	});  
});
