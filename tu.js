class Crircle {
    constructor(x,y,radius) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._canvas = document.getElementById("myCanvas");
        this._ctx = this._canvas.getContext("2d");
    }

    draw(){
        this._ctx.beginPath();
        this._ctx.fillStyle = "#c91111";
        this._ctx.arc(x,y,r,0,Math.PI*2);
        this._ctx.fill();
        this._ctx.closePath();
    }
}

class Hinhchunhat {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "#0d0c0c";
        this.ctx.arc(x,y,this.width,this.height);
        this.ctx.fill();
        this.ctx.closePath();
    }
}

class Hcn {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
}

draw(){
    this.ctx.beginPath();
    this.ctx.fillStyle = "#0d0c0c";
    this.ctx.arc(x,y,this.width,this.height);
    this.ctx.fill();
    this.ctx.closePath();
    }
}