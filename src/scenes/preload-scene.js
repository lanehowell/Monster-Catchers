import Phaser from 'phaser'
import { SCENE_KEYS } from './scene-keys'
import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from '../assets/asset-keys'

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.PRELOAD_SCENE
        })
    }

    // LOAD ASSETS FOR SCENE
    preload() {
        console.log(`[${PreloadScene.name}:preload] invoked`)

        const monsterTamerAssetPath = 'assets/images/monster-tamer'
        const kenneysAssetPath = 'assets/images/kenneys-assets'

        //Battle Backgrounds
        this.load.image(BATTLE_BACKGROUND_ASSET_KEYS.FOREST, `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`)

        //Battle Assets
        this.load.image(BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND, `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`)

        //Health Bar
        this.load.image(HEALTH_BAR_ASSET_KEYS.RIGHT_CAP, `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`)
        this.load.image(HEALTH_BAR_ASSET_KEYS.LEFT_CAP, `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`)
        this.load.image(HEALTH_BAR_ASSET_KEYS.MIDDLE, `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`)

        //Monsters
        this.load.image(MONSTER_ASSET_KEYS.CARNODUSK, `${monsterTamerAssetPath}/monsters/carnodusk.png`)
        this.load.image(MONSTER_ASSET_KEYS.IGUANIGNITE, `${monsterTamerAssetPath}/monsters/iguanignite.png`)
    }

    //CREATE ASSETS FOR SCENE
    create() {
        console.log(`[${PreloadScene.name}:create] invoked`)
        this.scene.start(SCENE_KEYS.BATTLE_SCENE)
    }
}