class OD_movement extends Phaser.Scene {

    constructor(){
        super(OD_movement);
        this.my = {sprite: {}};
        this.projQue = [];

    }

    preload(){
        this.load.setPath("./assets/Tiles/transparent");
        this.load.image("LilBuddy", "tile_0240.png");  
        this.load.image("fairy", "tile_0326.png");  
        
    }

    create(){
        let my = this.my;
        my.sprite.LilBuddy = this.add.sprite(500,400,"LilBuddy").setScale(6);

        let spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);    
        spaceKey.on('down', (key, event) => {
            this.projQue.push(this.add.sprite(my.sprite.LilBuddy.x,my.sprite.LilBuddy.y, "fairy").setScale(4));
        });

    }

    update(){
        let my = this.my;
        this.input.keyboard.on("keydown", function(keypress) {

            if(keypress.code === "KeyA" && my.sprite.LilBuddy.x > 50){
                //console.log("A");
                //console.log(my.sprite.body.x);
                my.sprite.LilBuddy.x = my.sprite.LilBuddy.x - 0.2;
            }
            if(keypress.code === "KeyD" && my.sprite.LilBuddy.x < 950){
                //console.log("A");
                //console.log(my.sprite.body.x);
                my.sprite.LilBuddy.x = my.sprite.LilBuddy.x + 0.2;
            }

        })

        for (let item in this.projQue) {

            this.projQue[item].y =   this.projQue[item].y - 10;
            if (this.projQue[item].y < 0) {
                this.projQue[item].destroy();
                console.log(this.projQue[item]);
            }
            console.log(this.projQue);
        }
    }


}