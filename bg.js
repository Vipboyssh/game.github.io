var bg = function(game) {
    this.game = game;
    this.image = null;
    
    this.loaded = false;
    this.x = 0;

    var self = this;

    this.init = function() {
        this.loadedImage();
    }

    this.loadedImage = function() {
        this.image = new Image();

        this.image.src = "./img/night1.png";

        this.image.onload = function() {
            //đợi load ảnh
            self.loaded = true;
            console.log("bg loaded");
        }
    }

    this.update = function() {
        this.x --;
        if(this.x == -300) this.x = 0;
    }

    this.draw = function() {
        if(self.loaded == false) return;
        this.game.context.drawImage(this.image, this.x, 0);
        this.game.context.drawImage(this.image, this.x + 300, 0);

    }

}