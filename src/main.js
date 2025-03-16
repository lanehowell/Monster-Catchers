import { BattleScene } from './scenes/battle-scene'
import { PreloadScene } from './scenes/preload-scene'
import { SCENE_KEYS } from './scenes/scene-keys'
import './styles/style.css'
import Phaser from 'phaser'

const game = new Phaser.Game({
  type: Phaser.CANVAS,
  pixelArt: false,
  scale: {
    parent: 'game-container',
    width: 1024,
    height: 576,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  backgroundColor: '#000000'

})

// PRELOADER TO LOAD ALL ASSETS NEEDED
game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene)
game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene)
// RUN PRELOADER SCENE
game.scene.start(SCENE_KEYS.PRELOAD_SCENE)