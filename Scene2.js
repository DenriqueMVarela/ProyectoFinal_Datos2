/* global correr */

class Scene2 extends Phaser.Scene{
    constructor(){
        super({key: "Scene2"});

    }
     
    preload(){
               //Escenario 1
        this.load.image('fondo', './img/8.3.jpg');
        this.load.image('fondoP1', './img/8.2.png');
        this.load.image('fondoP2', './img/8.4.jpg');
        this.load.image('fondoP3', './img/8.5.jpg');
        //Movimientos del personaje
        this.load.spritesheet('Personaje', './img/CorrerP.png',{ frameWidth:32.99, frameHeight:47 });
        this.load.spritesheet('Personaje2', './img/Saltar.png',{ frameWidth:30.61, frameHeight:48 });
        this.load.spritesheet('Personaje3', './img/Saltar2.png',{ frameWidth:30.61, frameHeight:48 });
//        this.load.image('bala','./img/bullet.png');
//        this.load.audio('correr','./Audio/Audio1.mp3');
    }
    
    create(){
        //Mostrar en pantalla
        this.add.image(538, 273, 'fondo');
        this.add.image(946, 508, 'fondoP2');
        piso=this.physics.add.staticGroup();
        piso.create(400, 537, 'fondoP1');
        piso.create(945,575,'fondoP3');
        player = this.physics.add.sprite(100, 350, 'Personaje');
        player.setSize(23,0);
//        correr=this.sound.add('correr');
//        this.keySpace;
//      bullet= this.add.group();
//          key: 'bala',
//          repeat:11
//      });
//      bullet.enablebody= true;
//      bullet.physicsBodyType= Phaser.Physics.arcade;
//      bullet.createMultiple(30,'bala');
////      bullet.setAll('anchor.x',0.5);
////      bullet.setAll('anchor.y',1);
////      bullet.setAll('outOfBoundsKill',true);
////      bullet.setAll('checkWorldBounds',true);
//      shoot= game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      
        player.setBounce(0);
        player.setCollideWorldBounds(true);
        
//this.anims.create({
//    key: 'down',
//    frames: this.anims.generateFrameNumbers('dude2',{start:9,end:9}),
//    frameRate:10,
//    repeat:1
//});        
  
this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('Personaje2', { start:0, end: 5 }),
    frameRate: 10,
    repeat: 1
});

this.anims.create({
    key: 'up-left',
    frames: this.anims.generateFrameNumbers('Personaje3', { start:12, end: 8 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('Personaje', { start:7, end: 0 }),
    frameRate: 10,
    repeat: -1
    
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'Personaje', frame: 8 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('Personaje', { start: 9, end:16 }),
    frameRate: 10,
    repeat: -1
});
      
      cursors = this.input.keyboard.createCursorKeys();
      this.physics.add.collider(player, piso);
//      this.cameras.main.setBounds();
//      this.cameras.main;
      
    }
    
    
    update(){
    if (cursors.left.isDown ){
    player.setVelocityX(-120);
    player.anims.play('left',true);
    if(cursors.up.isDown){
    player.setVelocityX(-120);
    player.anims.play('up-left', true);
    }
    }
   else
    if (cursors.right.isDown){
    player.setVelocityX(120);
    player.anims.play('right', true);
    if(cursors.up.isDown){
    player.setVelocityX(120);
    player.anims.play('up', true);
    }
}

else if(cursors.up.isDown){
    player.setVelocityY(-90);
    player.anims.play('up', true);
    }
    
else
{
    player.setVelocityX(0);
    player.anims.play('turn');
}

if (cursors.up.isDown && player.body.touching.down){
    player.setVelocityY(-200);}

//  if (shoot.isDown) {
//        ShootBullet();
//    }

    }



}