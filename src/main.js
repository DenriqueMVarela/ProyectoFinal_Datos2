
var config = {
        type: phaser.AUTO,
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

    var game = new phaser.Game(config);
//    var player;
//    var cursors;
    function preload ()
    {
        //Carga los recursos necesarios
        this.load.image('fondo', '../img/fondo.png');
        this.load.spritesheet('personaje', './img/Correr_1.png',{ frameWidth: 32, frameHeight: 48 });

    }

    function create ()
    {
        //Mostrar en pantalla
        this.add.image(0, 0, 'fondo');
        player = this.physics.add.sprite(100, 450, 'personaje');
        player.setBounce(0);
        player.setCollideWorldBounds(true);
        
        
    this.anims.create({
    key: 'turn',
    frames: [ { key: 'personaje', frame: 0 } ],
    frameRate: 20
       });  
       
    this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('personaje', { start: 1, end: 8 }),
    frameRate: 10,
    repeat: -1
        });
      
      cursors = this.input.keyboard.createCursorKeys();

    }
    
    function update (){    
    if (cursors.right.isDown){
    player.setVelocityX(160);
    player.anims.play('right', true);}
    
    else{
    player.setVelocityX(0);
    player.anims.play('turn');}

    if (cursors.up.isDown && player.body.touching.down){
    player.setVelocityY(-340);}
    }
    
//    var estadoPrincipal = {
//        
//    }