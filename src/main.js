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

    function preload ()
    {
        //Carga los recursos necesarios
        this.load.image('fondo', '../img/fondo.png');
    }

    function create ()
    {
        //Mostrar en pantalla
        this.add.image(0, 0, 'fondo');
    }
    
    function update ()
    {
        //Animar el juego
        
    }
    
//    var estadoPrincipal = {
//        
//    }