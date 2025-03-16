import Phaser from 'phaser'
import { SCENE_KEYS } from './scene-keys'
import { BATTLE_BACKGROUND_ASSET_KEYS, MONSTER_ASSET_KEYS } from '../assets/asset-keys'

export class BattleScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.BATTLE_SCENE
        })
    }

    //CREATE ASSETS FOR SCENE
    create() {
        console.log(`[${BattleScene.name}:create] invoked`)

        // CREATE MAIN BACKGROUND FROM PRELOADSCENE PRELOAD()
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0)

        // RENDER OUT PLAYER AND ENEMY MONSTERS
        this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0)
        this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true)
    }
}