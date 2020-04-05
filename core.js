var core = function(game) {
    this.game = game;      //lấy các tham số, trạng thái của hàm game trong game.js
    this.images = [];

    this.x = [280,275,270];
    this.y = 0;

    this.count = 0;

    var self = this;
    
    this.init = function() {
        console.log("core");
        this.loadedImage();
    }

    this.loadedImage = function() {
        for(var i = 0; i <= 9; i++) {
            var image = new Image();
            image.src = "./img/"+ i +".png";
            self.images.push(image);
        }
    }

    this.update = function() {
        //tính điểm
        if(125 == this.game.pipe.x1 + 51 || 125 == this.game.pipe.x2 + 51) {
            this.count++;
            
        }
    }


    this.draw = function() {
        self.game.context.drawImage(this.images[this.count], this.x[0], 5);
    }
}