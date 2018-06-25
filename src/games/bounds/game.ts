import * as Phaser from 'phaser'
import { CrateScene } from './scenes/playGame'

const config: GameConfig = {
  type: Phaser.AUTO, // canvas or WebGl or ...
  width: 768,
  height: 576,
  backgroundColor: '#000044',
  // physics settings
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      debug: false,
    },
  },

  // array with all game scenes
  scene: [CrateScene],
}

const game = new Phaser.Game(config)
