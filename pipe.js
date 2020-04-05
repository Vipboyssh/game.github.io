var pipe = function(game) {
    this.game = game;      //lấy các tham số, trạng thái của hàm game trong game.js
    this.images = [];
    this.loaded1 = false;
    this.loaded2 = false;
    this.x1 = 400;
    this.y1 = -200;
    this.x2 = 600;
    this.y2 = -200;

    var self = this;
    
    this.init = function() {
        this.loadedImage();
    }

    this.loadedImage = function() {
        var img1 = new Image();
        var img2 = new Image();

        img1.src = "./img/pipe1.png";
        img2.src = "./img/pipe2.png";

        img1.onload = function() {
            self.loaded1 = true;
            self.images.push(img1);
            console.log("pipe loader");
        }
        img2.onload = function() {
            self.loaded2 = true;
            self.images.push(img2);
        }
    }

    this.update = function() {
        if(this.game.gameStart == false) return;
        this.x1 -=2;
        this.x2 -=2;
        if(this.x1 == 100) {
            this.x2 = 300;
            this.y2 = -Math.floor(Math.random()*250 + 150);
        }
        if(this.x2 == 100) {
            this.x1 = 300;
            this.y1 = -Math.floor(Math.random()*250 + 150);
        }
    }


    this.draw = function() {
        if(self.loaded1 == false && self.loaded2 == false) return;
        self.game.context.drawImage(this.images[0], this.x1, this.y1); 
        self.game.context.drawImage(this.images[1], this.x1, this.y1 + 520);
        self.game.context.drawImage(this.images[0], this.x2, this.y2); 
        self.game.context.drawImage(this.images[1], this.x2, this.y2 + 520);

        
    }
}