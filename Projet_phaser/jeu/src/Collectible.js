function Collectible(scene, x, y) {
	Phaser.GameObjects.GameObject.call(this, scene, "sprite");

	//this.animation = new Phaser.Animation.Animation(scene.anims, configAnim.key, configAnim);

	this.x = x;
	this.y = y;
	this.physics;
}

Collectible.prototype = Object.create(Phaser.GameObjects.GameObject.prototype);
Collectible.prototype.constructor = Collectible;

Collectible.prototype.activation = function(player) {
	console.log ("slt on est dans la classe Collectible dans Activation");
};

/*Collectible.prototype.addToAnimationManager = function(animationManager, key) {
	animationManager.add(key, this.animation);
};*/

export { Collectible };