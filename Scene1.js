class Scene1 extends Phaser.Scene{
    constructor(){
        super({key: "Scene1"});
    }
    
    preload(){
        this.load.image('Fondo','./img/1.jpg');
        this.load.image('BotonPlay','./img/sprBtnPlay.png');
        this.load.image('BotonPlay2','./img/sprBtnPlayHover.png');
        this.load.image('BotonPlay3','./img/sprBtnPlayDown.png');
        
        this.load.audio('SM','./Audio/SonidoMenú.mp3');
//        this.scene.start("Scene2");
    }
    
    create(){
        //Se carca la imagen del menu
        this.add.image(600,300,'Fondo');
        
        //Audio menu
        let Song=this.sound.add("SM"); 
        Song.play();
        
        this.btnPlay = this.add.sprite (this.game.config.width * 0.5,this.game.config.height * 0.5,"BotonPlay");
        this.btnPlay.setInteractive ();
        
        this.btnPlay.on("pointerover", function() {
        this.btnPlay.setTexture("BotonPlay2"); 
         }, this);
         
          this.btnPlay.on ("pointerout", function (){ 
          this.setTexture ("BotonPlay"); 
          });
          
          this.btnPlay.on("pointerdown", function() {
          this.btnPlay.setTexture("BotonPlay3");
          }, this);
          
          this.btnPlay.on("pointerup", function () { 
             this.btnPlay.setTexture ("BotonPlay"); 
          }, this);
          
          this.btnPlay.on ("pointerup", function () { 
          this.btnPlay.setTexture ("BotonPlay"); 
          this.scene.start ("Scene2"); 
          this.sound.stopAll();
          }, this);
    }
    
    update(){
        
    }
}
