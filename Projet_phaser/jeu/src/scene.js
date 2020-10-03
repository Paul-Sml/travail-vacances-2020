import { Personnage } from './Personnage.js';
import { Piece } from './Piece.js';

var scene = {
	preload: preload,
    create: create,
    update: update
}

var personnage;
var collecpos = [
	{ type: 'piece', x: 150, y: 500, },
	{ type: 'piece', x: 132, y: 500, },
	{ type: 'piece', x: 132, y: 500, },
	{ type: 'piece', x: 132, y: 500, },
	{ type: 'piece', x: 132, y: 500, },
	{ type: 'piece', x: 132, y: 500, },
	{ type: 'piece', x: 122, y: 500, },
	{ type: 'piece', x: 124, y: 500, },
	{ type: 'piece', x: 126, y: 500, },
	{ type: 'piece', x: 128, y: 500, },
	{ type: 'piece', x: 130, y: 500, },
	{ type: 'piece', x: 132, y: 500, },
	{ type: 'bonus', x: 132, y: 500, },
];
var collectibles = [];

//PRELOAD

function preload () {
	personnage = new Personnage(this);

    this.load.image('ground', '../assets/groundPlaceholder.png');
    this.load.image('fond', '../assets/fond.png');
    this.load.spritesheet('coins', 'assets/coin.png', { frameWidth: 15, frameHeight: 15 });
    this.load.spritesheet(personnage.etat['normal'].spritesheetName, personnage.etat['normal'].pathToImage, personnage.etat['normal'].sizeSpritesheet);
    this.load.spritesheet(personnage.etat['geant'].spritesheetName, personnage.etat['geant'].pathToImage, personnage.etat['geant'].sizeSpritesheet);
    this.load.spritesheet(personnage.etat['plusultra'].spritesheetName, personnage.etat['plusultra'].pathToImage, personnage.etat['plusultra'].sizeSpritesheet);

	for (var i = 0; i < collecpos.length; i++) {
		if (collecpos[i].type == 'piece'){
			collectibles[i] = new Piece(this, collecpos[i].x, collecpos[i].y);
		} 
	}
}

//PRELOAD

//CREATE

function create () {

	personnage.personnageRunLeft = personnage.createAnimation('personnageRunLeft', { start: 0, end: 3 } , 9);
    personnage.personnageIdle = personnage.createAnimation('personnageIdle', { start: 4, end: 11 } , 6);

	

    this.add.image(400, 300, 'fond');

	console.log(this.physics);
	var platforms = this.physics.add.staticGroup();

	//plateformes 80x40
	platforms.create(40, 580, 'ground');
	platforms.create(120, 580, 'ground');
	platforms.create(200, 580, 'ground');

	platforms.create(440, 580, 'ground');
	platforms.create(520, 580, 'ground');
	platforms.create(600, 580, 'ground');

	platforms.create(840, 580, 'ground');
	platforms.create(920, 580, 'ground');
	platforms.create(1000, 580,'ground');
	platforms.create(1080, 580,'ground');
	platforms.create(1160, 580,'ground');

	platforms.create(1080, 540,'ground');
	platforms.create(1160, 540,'ground');

	platforms.create(1480, 580,'ground');
	platforms.create(1560, 580,'ground');
	platforms.create(1640, 580,'ground');
	platforms.create(1720, 580,'ground');
	platforms.create(1800, 580,'ground');
	platforms.create(1880, 580,'ground');
	platforms.create(1960, 580,'ground');
	platforms.create(2040, 580,'ground');

	platforms.create(2280, 580,'ground');
	platforms.create(2360, 580,'ground');
	platforms.create(2440, 580,'ground');
	platforms.create(2520, 580,'ground');
	platforms.create(2600, 580,'ground');

	platforms.create(2280, 540,'ground');
	platforms.create(2360, 540,'ground');

	platforms.create(2840, 580,'ground');
	platforms.create(2920, 580,'ground');
	platforms.create(3000, 580,'ground');

	platforms.create(2840, 500,'ground');
	platforms.create(2920, 500,'ground');
	platforms.create(3000, 500,'ground');

	platforms.create(3320, 580,'ground');
	platforms.create(3400, 580,'ground');
	platforms.create(3480, 580,'ground');
	platforms.create(3560, 580,'ground');
	platforms.create(3640, 580,'ground');

	personnage.player = this.physics.add.sprite(120, 400, personnage.etat[personnage.etatActuel].spritesheetName);
	personnage.player.setGravityY(300);

	for (var i = 0; i < collectibles.length; i++) {
		collectibles[i].physics = this.physics.add.sprite(collectibles[i].x, collectibles[i].y, "coins");
	}

	this.anims.create(collectibles[0].configAnim);

	this.cameras.main.startFollow(personnage.player);

	this.physics.add.collider(personnage.player, platforms);
    personnage.player.setCollideWorldBounds(true);


}

//CREATE

//UPDATE

function update (time, delta) {

	for (var i = 0; i < collectibles.length; i++) {
    	this.physics.add.overlap(personnage.player, collectibles[i], collectibles[i].activation, null, this);
    	// collectibles[i].physics.anims.play('piece', true);
	}

	personnage.controles();

}

//UPDATE

export { scene };