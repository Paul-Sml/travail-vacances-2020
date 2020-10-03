import { Collectible } from './Collectible.js';

function Piece (scene, x, y) {
	Collectible.call(this, scene, x, y);
	this.configAnim = {
		key: 'piece',
        frames: scene.anims.generateFrameNumbers('coins', { start: 0, end: 10 }),
        frameRate: 12,
        repeat: -1
    }

}

Piece.prototype = Object.create(Collectible.prototype);
Piece.prototype.constructor = Piece;

Piece.prototype.activation = function (player){
	console.log ("slt on est dans la classe Piece dans Activation");
	player.addPiece();
    this.disableBody(true, true);
}

export { Piece };