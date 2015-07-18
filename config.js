
var config = {
  game: 'rambo',
  font: 'media/fonts/font_04b03_white_8.png',
  player: 1,
  players: {
    1: {
      score: 100,
      coins: 10,
      fcoins: 100,
      experience: 0,
      level: 1,      
      lives: 3,
      health: 3,			
      energy: 10,
      influenceRadius: 3,
      character: 'sonic',
      characters: ['rambo','sonic'],
      achievements: ['killed_spike'],
      options: {
        game: {
          paused: true,
          level: 0
        },
        controls: {
          up: 'UP_ARROW',
          down: 'DOWN_ARROW',
          left: 'LEFT_ARROW',
          right: 'RIGHT_ARROW',
          fire1: 'X',
          fire2: 'C',
          jump: ['UP_ARROW','SPACE']
        },
        sound: {
          music: {
            enabled: true,
            level: 0.3
          },
          sound: {
            enabled: true,
            level: 0.5
          }
        }
      }
    }
  },
  characters: {
    sonic: {
      title: 'Sonic',
      sprite: 'media/sonic/sonic.png',
      sizeX: 40,
      sizeY: 45,
      size: {x: 40, y:45},
      offset: {x: 0, y: 0},
      abilities: ['laser-gun','fireballs'],
      maxHealth: 3,
      regenHealth: true,
      regenRateHealth: 0.1,
      maxEnergy: 10,
      regen: true,
      regenRateEnergy: 0.1,
      hud: {
        heartFull: 'media/hud/heart-full.png',
        heartEmpty: 'media/hud/heart-empty.png',
        coinIcon: 'media/props/coin.png',
        fcoinIcon: 'media/props/coin.png',
        playerIcon: 'media/characters/rambo.png'
      }
    }
  },
  achievements: {
    killed_spike: {
      copy: 'You Killed a Spike!',
      icon: 'media/spike.png'
    }
  },
  levels: [
    { 
      title: 'Level 1',
      level: 'Level1',
      icon: 'media/level1.png',
      music: ['music/luminous_vein.ogg']
    }
  ]
};

config.character = config.players[config.player].character;
