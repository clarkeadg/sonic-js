ig.module(
	'game.entities.palm-short'
)
.requires(
	'plusplus.core.config',
    'plusplus.core.entity'
)
.defines(function(){

	var _c = ig.CONFIG;
	
	EntityPalmShort= ig.global.EntityPalmShort = ig.EntityExtended.extend({
		size: { x: 104, y: 143},
		
		type: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.NEVER,
		
		animSheet: new ig.AnimationSheet( 'media/props/palm-short.png', 104, 143 ),
		//sfxCollect: new ig.Sound( 'media/sound/fx/coin.ogg' ),

		animInit: 'idleX',

		animSettings: {
            idleX: {
                sequence: [0],
                frameTime: 1
            }
        }
	});

});