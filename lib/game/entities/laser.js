/**
 * Projectile for laser gun ability.
 **/
ig.module(
    'game.entities.laser'
)
.requires(
	// require the projectile
	'plusplus.abstractities.projectile',
	// and an explosion for fun
	'plusplus.entities.explosion',
	// if you want to use the config
    // don't forget to require it
    'plusplus.core.config',
	// and some utils
	'plusplus.helpers.utils',
	'impact.entity-pool'
)
.defines(function () {
    "use strict";
	
	var _c = ig.CONFIG;
	var _ut = ig.utils;
	
	ig.EntityLaser = ig.global.EntityLaser = ig.Projectile.extend({
		
		// lite collides to get knocked around
		
		collides: ig.EntityExtended.COLLIDES.LITE,
		
		size: {x: 4, y: 4},
		
		offset: {x: 2, y: 2},

		influenceRadius: 3,
		
		// animations the Impact++ way
			
		animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'abilities/laser.png', 8, 8 ),
		
		animSettings: {
			moveX: {
				frameTime: 1,
				sequence: [0]
			},
			deathX: {
				frameTime: 0.05,
				sequence: [1,2,3,4,5]
			},
			moveY: {
				frameTime: 1,
				sequence: [6]
			},
			deathY: {
				frameTime: 0.05,
				sequence: [7,8,9,10,11]
			}
		},
		
		// can flip any direction
		
		canFlipX: true,
		canFlipY: true,
		
		// stats
		
		damage: 2,
		
		lifeDuration: 2,
		
		// no gravity
		
		gravityFactor: 0,
		
		// no friction
		
		friction: { x: 0, y: 0 },
		
		// no bounce
		
		bounciness: 0,
		
		// die on collision with walls
		
		collisionKills: true,

		sound: new ig.Sound( 'media/sound/fx/shoot.ogg' ),
		explode: new ig.Sound( 'media/sound/fx/explode.ogg' ),		

		initProperties: function() {
		    this.parent();

			this.sound.play();
		},				

	    reset: function( x, y, settings ) {
	        this.parent( x, y, settings );
	        //this.influenceRadius = 5;
	    },

	    update: function() {
	    	this.parent();
	    	//if (this.collidingWithMap)
	    	//	this.influenceRadius = 200;
	    },

	    kill: function( x, y, settings ) {
	        this.parent();	        
	        this.explode.play();
	    }
	
	});

	ig.EntityPool.enableFor( EntityLaser );


});