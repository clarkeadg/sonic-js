/** 
 * Players might need some basic functionality
 * like input handling, camera following, etc
 * to take advantage of these extend ig.Player
 */
ig.module(
    'game.entities.player'
)
.requires(
    // note that anything in abstractities
    // is an abstract entity that needs to be extended
    'plusplus.abstractities.player',
	// require the shooting abilities
	'game.abilities.grenade-launcher',
	'game.abilities.laser-gun',
	// require the glow ability
	// lets see some lights!
	'plusplus.abilities.glow',
	// if you want to use the config
    // don't forget to require it
    'plusplus.core.config',
	// and some utils
	'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
	
	var _c = ig.CONFIG;
	var _ut = ig.utils;

	//console.log('2222',ig.Influencer)
	
    ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
		size: config.characters[config.character].size,
		offset: config.characters[config.character].offset,
		type: ig.Entity.TYPE.A,
		animSheet: new ig.AnimationSheet( config.characters[config.players[config.player].character].sprite, config.characters[config.players[config.player].character].sizeX, config.characters[config.players[config.player].character].sizeY ),		
		animInit: _c.TOP_DOWN ? "moveX" : "idleX",
		animSettings1: {
			idleX: {
				frameTime: 1,
				sequence: [0]
			},
			idleLeft: {
				frameTime: 1,
				sequence: [0]
			},
			idleRight: {
				frameTime: 1,
				sequence: [0]
			},
			idleY: {
				frameTime: 1,
				sequence: [0]
			},
			idleUp: {
				frameTime: 1,
				sequence: [0]
			},
			idleDown: {
				frameTime: 1,
				sequence: [0]
			},
			jumpX: {
				frameTime: 1,
				sequence: [2]
			},
			fallX: {
				frameTime: 1,
				sequence: [0]
			},
			moveX: {
				frameTime: 0.03, 
				sequence: [0,1,2,3,4,5,6,7,8,9,10]
			},
			moveLeft: {
				frameTime: 1,
				sequence: [0]
			},
			moveRight: {
				frameTime: 1,
				sequence: [0]
			},
			moveY: {
				frameTime: 1,
				sequence: [0]
			},
			moveDown: {
				frameTime: 1,
				sequence: [0]
			},
			moveUp: {
				frameTime: 1,
				sequence: [0]
			},
			shootX: {
				frameTime: 1,
				sequence: [0]
			},
			shootRight: {
				frameTime: 1,
				sequence: [0]
			},
			shootLeft: {
				frameTime: 1,
				sequence: [0]
			},
			shootY: {
				frameTime: 1,
				sequence: [0]
			},
			shootDown: {
				frameTime: 1,
				sequence: [0]
			},
			shootUp: {
				frameTime: 1,
				sequence: [0]
			},
			deathX: {
				frameTime: 1,
				sequence: [0]
			},
			deathLeft: {
				frameTime: 1,
				sequence: [0]
			},
			deathRight: {
				frameTime: 1,
				sequence: [0]
			},
			deathY: {
				frameTime: 1,
				sequence: [0]
			},
			deathDown: {
				frameTime: 1,
				sequence: [0]
			},
			deathUp: {
				frameTime: 1,
				sequence: [0]
			}
		},
		animSettings: {
			idleX: {
				frameTime: 0.3,
				sequence: [0,1,2,3,4,3,2,1,0,0,0,0,0,0]
			},
			idleLeft: {
				frameTime: 1,
				sequence: [0]
			},
			idleRight: {
				frameTime: 1,
				sequence: [0]
			},
			idleY: {
				frameTime: 1,
				sequence: [0]
			},
			idleUp: {
				frameTime: 1,
				sequence: [0]
			},
			idleDown: {
				frameTime: 1,
				sequence: [0]
			},
			jumpX: {
				frameTime: 0.05,
				sequence: [17,18,19,17,18,19,17,18,19,17,18,19,17,18,19,17,18,19]
			},
			fallX: {
				frameTime: 1,
				sequence: [0]
			},
			moveX: {
				frameTime: 0.08, 
				sequence: [30,31,32,33,34,35,36,37]
			},
			moveLeft: {
				frameTime: 1,
				sequence: [0]
			},
			moveRight: {
				frameTime: 1,
				sequence: [0]
			},
			moveY: {
				frameTime: 1,
				sequence: [0]
			},
			moveDown: {
				frameTime: 1,
				sequence: [0]
			},
			moveUp: {
				frameTime: 1,
				sequence: [0]
			},
			shootX: {
				frameTime: 1,
				sequence: [0]
			},
			shootRight: {
				frameTime: 1,
				sequence: [0]
			},
			shootLeft: {
				frameTime: 1,
				sequence: [0]
			},
			shootY: {
				frameTime: 1,
				sequence: [0]
			},
			shootDown: {
				frameTime: 1,
				sequence: [0]
			},
			shootUp: {
				frameTime: 1,
				sequence: [0]
			},
			deathX: {
				frameTime: 1,
				sequence: [0]
			},
			deathLeft: {
				frameTime: 1,
				sequence: [0]
			},
			deathRight: {
				frameTime: 1,
				sequence: [0]
			},
			deathY: {
				frameTime: 1,
				sequence: [0]
			},
			deathDown: {
				frameTime: 1,
				sequence: [0]
			},
			deathUp: {
				frameTime: 1,
				sequence: [0]
			}
		},
		glowSettings: {
			light: {
				performance: ig.EntityExtended.PERFORMANCE.MOVABLE,
				castsShadows: false
			}
		},
		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			//console.log(config.characters[config.players[config.player].character].title)
			//if (config.characters[config.players[config.player].character].title == "Sonic") {
			//	this.animSettings = this.animSettingsSonic;
			//}
			this.resetPlayer();
			ig.game.player = this;
			if(ig.game.myNoteMgr) ig.game.myNoteMgr.spawn(config.font, config.characters[config.character].title, ig.game.player.pos.x, ig.game.player.pos.y, { entity: ig.game.player, lifetime: 0, vel: { x: 0, y: 0 } });
		},		
		initProperties: function () {
			this.parent();			
			this.shoot = new ig.LaserGun( this );
			this.grenade = new ig.GrenadeLauncher( this );
			this.abilities.addDescendants( [
				this.shoot,
				this.grenade
			]);			
		},
		resetPlayer: function() {
			this.score = config.players[config.player].score;
			this.lives = config.players[config.player].lives;
			this.health = config.players[config.player].health;
			this.energy = config.players[config.player].energy;		
			this.regen = config.players[config.player].regen;
			this.regenHealth = config.players[config.player].regenHealth;
			this.regenRateEnergy = config.players[config.player].regenRateEnergy;
			this.coins = config.players[config.player].coins;
			this.fcoins = config.players[config.player].fcoins;
			this.maxHealth = config.characters[config.character].maxHealth;
			this.influenceRadius = config.players[config.player].influenceRadius;
			this.achievements = config.players[config.player].achievements;
			this.animSheet = new ig.AnimationSheet( config.characters[config.players[config.player].character].sprite, 16, 16 );
		},
		handleInput: function() {
			var shootX;
			var shootY;

			if (ig.input.pressed('shoot')) {
				
				if ( _c.TOP_DOWN ) {
					
					if ( this.facing.x !== 0 ) {
						
						shootX = this.facing.x > 0 ? this.pos.x + this.size.x : this.pos.x;
						
					}
					else {
						
						shootX = this.pos.x + this.size.x * 0.5;
						
					}
					
					if ( this.facing.y !== 0 ) {
						
						shootY = this.facing.y > 0 ? this.pos.y + this.size.y : this.pos.y;
						
					}
					else {
						
						shootY = this.pos.y + this.size.y * 0.5;
						
					}					
				}
				else {					
					shootX = this.flip.x ? this.pos.x : this.pos.x + this.size.x;
					shootY = this.pos.y + this.size.y * 0.5;					
				}
				
				this.shoot.activate( {
					x: shootX,
					y: shootY
				} );
			}
			
			if (ig.input.pressed('grenade') || ig.input.released('tap') ) {
				
				if ( _c.TOP_DOWN ) {
					
					if ( this.facing.x !== 0 ) {						
						shootX = this.facing.x > 0 ? this.pos.x + this.size.x : this.pos.x;
					}
					else {						
						shootX = this.pos.x + this.size.x * 0.5;						
					}
					
					if ( this.facing.y !== 0 ) {						
						shootY = this.facing.y > 0 ? this.pos.y + this.size.y : this.pos.y;
					}
					else {						
						shootY = this.pos.y + this.size.y * 0.5;						
					}					
				}
				else {					
					shootX = this.flip.x ? this.pos.x : this.pos.x + this.size.x;
					shootY = this.pos.y + this.size.y * 0.5;					
				}
				
				this.grenade.activate( {
					x: shootX,
					y: shootY
				} );
			}
			
			if (ig.input.state('swipe')) {

				var inputPoints = ig.input.getInputPoints([ 'swiping' ], [ true ]);

				for (var i = 0, il = inputPoints.length; i < il; i++) {

					var inputPoint = inputPoints[ i ];
					
					if (inputPoint.swipingUp) {

						this.jump();

					}
				}
			}

			this.parent();
		},
		giveCoins: function(x) {
			this.coins+= x;
		},
		kill: function() {
			this.lives-= 1;
			if (this.lives <= 0) {
				ig.game.unloadLevel();
				ig.game.showGameOver();
			}
			this.parent();
		}		
	});
});
