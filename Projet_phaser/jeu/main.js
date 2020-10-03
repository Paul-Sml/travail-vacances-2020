import { scene } from './src/scene.js';

var config = {
    type: Phaser.AUTO,
    width: 1067,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: scene
}

var game = new Phaser.Game(config);
console.log(game);