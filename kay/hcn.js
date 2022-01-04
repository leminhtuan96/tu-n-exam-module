class Rectangle {
    constructor(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._canvas = document.getElementById("myCanvas");
        this._ctx = this._canvas.getContext("2d");
        this._x = this._canvas.width -10;
        this._y = (this._canvas.height -100)/2;
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#c42020";
        this._ctx.rect(this._x, this._y, this._width, this._height);
        this._ctx.fill();
        this._ctx.closePath();
        this._ctx.lineWidth = 2;
        this._ctx.strokeStyle = "#0147f1";
        this._ctx.strokeRect(this._x, this._y, this._width, this._height);

    }
}


