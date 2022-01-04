class Circle {
    constructor(x, y, radius) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._canvas = document.getElementById("myCanvas");
        this._ctx = this._canvas.getContext("2d");
        this.speed = 10;
        this.flag = "Down";
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#c20b0b";
        this._ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        this._ctx.fill();
        this._ctx.closePath();
    }

    movedown() {
        this.clear();
        this._y += this.speed;
        this.draw();
        this.checkvacham();
    }

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    moveup() {
        this.clear();
        this._y -= this.speed;
        this.draw();
        this.checkvacham();
    }

    checkvacham() {
        if (this._y + this._radius === rec._y) {
            this.flag = "Up";
        } else if (this._y <= this._radius) {
            this.flag = "Down";
        }
        if (this._x + this._radius > this._canvas.width - this._radius) {
            this._x -= this._canvas;
        }

    }

    collision(b, p) {

        p.top = p.y;

        p.bottom = p.y + p.height;

        p.left = p.x;

        p.right = p.x + p.width;


        b.top = b.y - b.radius;

        b.bottom = b.y + b.radius;

        b.left = b.x - b.radius;

        b.right = b.x + b.radius;


        return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;

    }

    check() {
        this.player = (this._x + this._radius < this._canvas.width / 2);
        if (collision(circle, this.player)) {
            this.collidepoint = (this._y - (this.player.y + this.player.height / 2));
            this.collidepoint = this.collidepoint / (this.player / 2);
            this.angLeRal = (Math.PI / 4) * this.collidepoint;
            this.direction = (this._x+this._radius<this._canvas.width/2);
            circle.velocityX = this.direction*this.speed*Math.cos(this.angLeRal);
            circle.velocityY = this.speed*Math.sin(this.angLeRal);
            this.speed +=1
        }
    }
}




