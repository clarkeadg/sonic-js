ig.module(
        'plusplus.config-user'
    )
    .defines(function () {

        /**
         * User configuration of Impact++.
         * <span class="alert alert-info"><strong>Tip:</strong> it is recommended to modify this configuration file!</span>
         * @example
         * // in order to add your own custom configuration to Impact++
         * // edit the file defining ig.CONFIG_USER, 'plusplus/config-user.js'
         * // ig.CONFIG_USER is never modified by Impact++ (it is strictly for your use)
         * // ig.CONFIG_USER is automatically merged over Impact++'s config
         * @static
         * @readonly
         * @memberof ig
         * @namespace ig.CONFIG_USER
         * @author Collin Hover - collinhover.com
         **/
        ig.CONFIG_USER = {
			
			/**
			 * Needs a top-down style game? Uncomment below!
			 */
			/*
			TOP_DOWN: true,
			ENTITY: {
				CAN_FLIP_X: true,
				CAN_FLIP_Y: true
			},
			CREATURE: {
				CAN_WANDER_X: true,
				CAN_WANDER_Y: true
			},
			*/

            /**
             * Fullscreen!
             */
            //GAME_WIDTH_PCT: 1,
            //GAME_HEIGHT_PCT: 1,

            /**
             * Dynamic scaling based on dimensions in view.
             */
            //GAME_WIDTH_VIEW: 480,
            //GAME_HEIGHT_VIEW: 320,

            //GAME_WIDTH: 960,
            //GAME_HEIGHT: 640,

            //SCALE: 4,

            // fullscreen!
            GAME_WIDTH_PCT: 1,
            GAME_HEIGHT_PCT: 1,

            // dynamic scaling based on dimensions in view (resolution independence)
            GAME_WIDTH_VIEW: 1,
            GAME_HEIGHT_VIEW: 1,
            
            // clamped scaling is still dynamic, but within a range
            // so we can't get too big or too small
            SCALE_MIN: 1,
            SCALE_MAX: 3,
            SCALE: 4,

            /**
             * Camera trap and smoothness. This helps with motion sickness.
             */
            CAMERA: {
				// we don't want to keep perfectly centered
				KEEP_CENTERED: false,
				// but if we did, we can use the lerp to smooth
				LERP: 0.025,
				// when we use the trap
				// we want to keep it as a percent of the screen
                BOUNDS_TRAP_AS_PCT: true,
				// the percents are 20% on either side of center X
				// the percents are 30% on either side of center Y
                BOUNDS_TRAP_PCT_MINX: -0.2,
                BOUNDS_TRAP_PCT_MINY: -0.3,
                BOUNDS_TRAP_PCT_MAXX: 0.2,
                BOUNDS_TRAP_PCT_MAXY: 0.3,
				// make sure camera doesn't go outside our level
                KEEP_INSIDE_LEVEL: true
            },

            /**
             * Special fonts.
             */
            FONT: {
                MAIN_NAME: "fonts/font_04b03_white_16.png",
                ALT_NAME: "fonts/font_04b03_white_8.png",
                CHAT_NAME: "fonts/font_04b03_black_8.png"
            }
			
		};

    });