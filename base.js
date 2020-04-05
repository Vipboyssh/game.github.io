var base = function(game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.flappyBird = null;
    this.loadedFlappy = false;
    this.x = 0;

    var self = this;

    this.init = function() {
        this.loadedImage();
    }

    this.loadedImage = function() {
        this.image = new Image();
        this.flappyBird = new Image();

        this.image.src = "./img/ground1.png";
        this.flappyBird.src = "./img/flappy bird.png";

        this.image.onload = function() {
            //đợi load ảnh
            self.loaded = true;
            console.log("base loaded");
        }
        this.flappyBird.onload = function() {
            //đợi load ảnh
            self.loadedFlappy = true;
            console.log("Flappy bird loaded");
        }
    }

    this.update = function() {
        this.x -=2;
        if(this.x == -300) this.x = 0;
    }

    this.draw = function() {
        if(self.loaded == false) return;
        this.game.context.drawImage(this.image, this.x, 420);
        this.game.context.drawImage(this.image, this.x + 300, 420);

        if(self.loadedFlappy) this.game.context.drawImage(this.flappyBird, 5, 5);
    }

}