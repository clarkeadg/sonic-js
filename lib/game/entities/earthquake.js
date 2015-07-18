/** 
 * Ghost is used to demo complex pathfinding.
 */
ig.module(
    'game.entities.earthquake'
)
.requires(
    'plusplus.entities.camera-shake',
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
	
    ig.EntityEarthquake = ig.global.EntityEarthquake = ig.EntityCameraShake.extend({

		
	});

});