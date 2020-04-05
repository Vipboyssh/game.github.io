var game = function() {
    this.canvas = null;
    this.context = null;
    this.width = 300;
    this.height = 520;

    this.bird = null;
    this.bg = null;
    this.base = null;
    this.core = null;

    this.gameOver = false;
    this.gameStart = false;
    this.restart = 0;

    var self = this;  

    // khởi tạo
    this.init = function() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.body.appendChild(this.canvas); //thêm canvas vào body

        //create bird
        this.bird = new bird(this);     //thiết lập hàm bird trong bird.js
        this.bird.init();
        //create background
        this.bg = new bg(this);
        this.bg.init()
        //create base
        this.base = new base(this);
        this.base.init();
        //create pipe
        this.pipe = new pipe(this);
        this.pipe.init();
        //create core
        this.core = new core(this);
        this.core.init();
        
        this.loop();
        this.listenMouse();
    }

    // Lặp lại 
    this.loop = function() {
        if(self.gameOver) return;

        setTimeout(self.loop, 30);

        self.update();
        self.draw();
    }

    //Thêm sự kiện click vào canvas
    this.listenMouse = function() {
        this.canvas.addEventListener("click", function() {
            self.gameStart = true;
            self.bird.flap();
            console.log("Click");
        })
    }

    // update
    this.update = function() {
        this.bg.update();
        this.pipe.update();
        this.bird.update();         //gọi hàm update của con chim trong bird.js
        this.base.update();
        this.core.update();
    }

    // Thiết kế
    this.draw = function() {
        this.bg.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
        this.core.draw();
    }

}

var g = new game();
g.init();