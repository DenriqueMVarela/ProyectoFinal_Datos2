/* global Phaser */

var config = {
        type: Phaser.AUTO,
        width: screen.width - 15,
        height: screen.height/1.2,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    var player;
    var cursors;
    function preload ()
    {
        //Carga los recursos necesarios
        this.load.image('fondo', './img/fondo.png');
        this.load.spritesheet('personaje', './img/Correr.png',{ frameWidth: 32, frameHeight: 48 });

    }

    function create ()
    {
        //Mostrar en pantalla
        this.add.image(0, 0, 'fondo');
        player = this.physics.add.sprite(100, 450, 'personaje');
        player.setBounce(0);
        player.setCollideWorldBounds(true);
        
    this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('personaje', { start: 0, end: 8 }),
    frameRate: 10,
    repeat: -1
        });
      
      cursors = this.input.keyboard.createCursorKeys();

    }
    
    function update (){    
        //Animar el juego
        if (cursors.right.isDown){
           player.setVelocityX(160);
           player.anims.play('right', true);}
        }
    
//    var estadoPrincipal = {
//        
//    }