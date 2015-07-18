ig.module(
	'game.entities.coin'
)
.requires(
	'plusplus.core.config',
    'plusplus.core.entity'
)
.defines(function(){

	var _c = ig.CONFIG;
	
	EntityCoin = ig.global.EntityCoin = ig.EntityExtended.extend({
		size: { x: 16, y: 16 },
		
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A, // Check against friendly
		collides: ig.Entity.COLLIDES.NEVER,
		
		animSheet: new ig.AnimationSheet( 'media/props/sonic-coin.png', 16, 16 ),
		sfxCollect: new ig.Sound( 'media/sound/fx/coin.ogg' ),

		animInit: 'idleX',

		animSettings: {
            idleX: {
                sequence: [0,1,2,3,4,5,6,7],
                frameTime: 0.1,
                stop: false
            }
        },		
		
		check: function( other ) {
			// The instanceof should always be true, since the player is
			// the only entity with TYPE.A - and we only check against A.
			if( other instanceof EntityPlayer ) {
				other.giveCoins(1);
				this.sfxCollect.play();
				this.kill();
			}
		}
	});

});