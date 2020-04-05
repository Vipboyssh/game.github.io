var bird = function(game) {
    this.game = game;      //lấy các tham số, trạng thái của hàm game trong game.js
    this.images = [];
    this.loaded1 = false;
    this.loaded2 = false;
    this.loaded3 = false;
    this.loadedOver= false;
    this.loadedStart= false;
    this.checkFlap = false;
    this.currentImages = null;
    this.currentFrame = 0;
    this.y = 0;
    this.speedY = 0;            //vận tốc rơi
    this.acceleration = 1;        //gia tốc rơi
    this.over = null;
    this.start = null;

    var self = this;
    
    this.init = function() {
        this.loadedImage();
    }

    this.loadedImage = function() {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        this.over = new Image()
        this.start = new Image();

        img1.src = "./img/chym đỏ1.png";
        img2.src = "./img/chym xanh1.png";
        img3.src = "./img/chym vàng1.png";
        this.over.src = "./img/over.png";
        this.start.src = "./img/start.png";

        img1.onload = function() {
            self.loaded1 = true;
            self.images.push(img1);
            self.currentImages = self.images[0];
        }
        img2.onload = function() {
            self.loaded2 = true;
            self.images.push(img2);
        }
        img3.onload = function() {
            self.loaded3 = true;
            self.images.push(img3);
        }
        this.over.onload = function() {
            self.loadedOver = true;
        }
        this.start.onload = function() {
            self.loadedStart = true;
        }
 
    }

    this.update = function() {
        if(self.loaded1 == false && self.loaded2 == false && self.loaded3 == false) return;
        if(this.checkFlap || this.game.gameStart) {
            self.currentFrame++;
            if(self.currentFrame == 16) self.currentFrame = 0;
            switch (self.currentFrame) {
                case 5:
                    self.currentImages = self.images[1];
                    break;
                case 10:
                    self.currentImages = self.images[2];
                    break;
                case 15:
                    self.currentImages = self.images[0];
                    break;
                default:
                    break;
            }
        }

        this.speedY += this.acceleration;
        this.y += this.speedY;
        if(this.game.gameStart) {
            if(this.y > 485 ) this.y = 485;
        }else {
            if(this.y > 235 ) {
                this.y = 235;
                this.checkFlap = true;
            }
            
        }
        
        // console.log(this.y);

        //checkGameover
        if(this.y == 485) this.game.gameOver = true;
        this.checkPipe();

    }

    this.flap = function() {
        this.speedY = -10;
    }

    this.checkPipe = function() {
        if(
            (
                (
                    (125 >= this.game.pipe.x1 && 125 <= this.game.pipe.x1 + 50) ||
                    (125+40 >= this.game.pipe.x1 && 125+40 <= this.game.pipe.x1 + 50)
                ) && 
                (
                    (this.y <= this.game.pipe.y1+400) ||
                    (this.y+30 >= this.game.pipe.y1+520)
                )
            ) ||
            (
                (
                    (125 >= this.game.pipe.x2 && 125 <= this.game.pipe.x2 + 50) ||
                    (125+40 >= this.game.pipe.x2 && 125+40 <= this.game.pipe.x2 + 50)
                ) && 
                (
                    (this.y <= this.game.pipe.y2+400) ||
                    (this.y+30 >= this.game.pipe.y2+520)
                )
            ) 
        ) this.game.gameOver = true;
    }

    this.draw = function() {
        if(self.loaded1 == false && self.loaded2 == false && self.loaded3 == false) return;
        self.game.context.drawImage(this.currentImages, 125, this.y); 

        if(self.loadedStart && this.game.gameStart == false) self.game.context.drawImage(this.start, 75, 280);
        if(self.loadedOver && this.game.gameOver) self.game.context.drawImage(this.over, 75, 210);

    }
}