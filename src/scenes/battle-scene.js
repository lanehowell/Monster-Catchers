import Phaser from 'phaser'
import { SCENE_KEYS } from './scene-keys'
import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from '../assets/asset-keys'

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

        // RENDER OUT THE PLAYER HEALTH BAR
        const playerMonsterName = this.add.text(20, 20, MONSTER_ASSET_KEYS.IGUANIGNITE, {
            color: '#7E3D3F',
            fontSize: '32px'
        })

        this.add.container(556, 318, [
            this.add.image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0),
            playerMonsterName,
            this.createHealth(34,34)
        ])
    }

    createHealth(x, y){
        const leftCap = this.add.image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP)
        const middle = this.add.image(leftCap.xx, y, HEALTH_BAR_ASSET_KEYS.MIDDLE)
        const rightCap = this.add.image(x, y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP)
        return this.add.container(x,y, [leftCap, middle, rightCap])
    }
}