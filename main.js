/* global Phaser, Scene1, Scene2 */

var config = {
        type: Phaser.AUTO,
        parent: 'container',   
        width:1300,
        height:600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug:false
            }
        },
        scene: [Scene1,Scene2]
        };
//        scene: {
//            preload: preload,
//            create: create,
//            update: update
//        }
    var game = new Phaser.Game(config);
    var player;
    var cursors;
    var piso;
    var bullet;
    let correr;
//    var bulletTime=0;
//    var shoot;
   

