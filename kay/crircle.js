class Crircle {
    constructor(x,y,radius) {
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

    moveright() {
        this.clear();
        this._x += this.speed;
        this.draw();
        this.checkvacham();
    }

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    moveleft() {
        this.clear();
        this._x -= this.speed;
        this.draw();
        this.checkvacham();
    }
}
let circle = new Circle(150, 0, 10);
circle.draw();