function Personnage (scene) {

	//stat
	this.vie = 5;
	this.nbPiece = 0;

	// info spritesheet
	this.etatActuel = 'normal';
	this.etat = {
		'normal' : {
			pathToImage : '../assets/joueurNormal.png',
			spritesheetName : 'playableCharacter',
			sizeSpritesheet : { frameWidth: 30, frameHeight: 30 }
		},
		'geant' : {
			pathToImage : '../assets/joueurGeant.png',
			spritesheetName : 'playableCharacter',
			sizeSpritesheet : { frameWidth: 30, frameHeight: 60 }
		},
		'plusultra' : {
			pathToImage : '../assets/joueurPlusultra.png',
			spritesheetName : 'playableCharacter',
			sizeSpritesheet : { frameWidth: 30, frameHeight: 60 }
		}
	};

	this.x;
	this.y;

	this.player;

	//controles
	this.cursors = scene.input.keyboard.createCursorKeys();
	this.jumptimer = 0;

	//animations

	this.animationManager = scene.anims;

	this.personnageRunLeft;

    this.personnageIdle;

}

Personnage.prototype.createAnimation = function(key, configFrames, frameRate) {
	var animation = new Phaser.Animation.Animation(this.animationManager, key,{
        frames: this.animationManager.generateFrameNumbers(this.etat[this.etatActuel].spritesheetName, configFrames),
        frameRate: frameRate,
        repeat: -1
    });
    this.animationManager.add(key, animation);
	return animation;
}

Personnage.prototype.controles = function() {

	/*cursors -> this.cursors ?*/

	// jump 
    if (this.cursors.up.isDown && this.player.body.onFloor())
    { //player is on the ground, so he is allowed to start a jump
        this.jumptimer = 1;
        this.player.body.velocity.y = -150;
    } else if (this.cursors.up.isDown && (this.jumptimer != 0) && (this.player.body.velocity.y < 0))
        { //player is no longer on the ground, but is still holding the jump key, and hasn't hit its head on something
            if (this.jumptimer > 10) { // player has been holding jump for over 20 frames, it's time to stop him
                    this.jumptimer = 0;
            } else { // player is allowed to jump higher (not yet 20 frames of jumping)
                    this.jumptimer ++;
                    this.player.body.velocity.y = -150-(this.jumptimer*5);//"jumptimer*5" is supposed to lower the gravity given to the player overtime, to create a more realistic jump
            }
        }
    if (this.cursors.up.isUp)
    { 
    this.jumptimer = 0; //reset jumptimer since the player is no longer holding the jump key
    }
    //jump end

    //droite gauche
    if (this.cursors.left.isDown)
    {
        this.player.body.setVelocityX(-200);
        this.player.anims.play('personnageRunLeft', true);
        this.player.flipX = true;
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.setVelocityX(200);
        this.player.anims.play('personnageRunLeft', true);
        this.player.flipX = false;
    } else {
        this.player.body.setVelocityX(0);
    }   
    //droite gauche end

    if (!this.cursors.left.isDown && !this.cursors.right.isDown && this.player.body.onFloor()) {
    	this.player.anims.play('personnageIdle', true);
    } else {
    	//this.personnageIdle.pause();
    }
}

Personnage.prototype.addPiece = function() {
	this.nbPiece ++;
	if (nbPiece >= 100) {
		this.vie ++;
		this.nbPiece -= 100;
	}
}

Personnage.prototype.effectBonus = function(bonus) {
	this.etatActuel = bonus;

	//animations de changement d'état
	//this.player = this.physics.add.sprite(this.x, this.y, this.etat[this.etatActuel].spritesheetName);
	this.animationManager.remove('personnageRunLeft');
	this.personnageRunLeft = this.createAnimation('personnageRunLeft', { start: 0, end: 3 } , 9);
	this.animationManager.remove('personnageIdle');
    this.personnageIdle = this.createAnimation('personnageIdle', { start: 4, end: 11 } , 6);
};

/*Personnage.prototype.collider = function(first_argument) {

};*/

export { Personnage };