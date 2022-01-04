let circle = new Circle(150, 0, 10);
circle.draw();
let rec = new Rectangle(100, 480, 80, 10);
rec.draw();

function play() {
    switch (circle.flag) {
        case "Down":
            circle.movedown();
            break;
        case "Up":
            circle.moveup();
            break;
    }
    rec.draw();
}

setInterval(play, 50)

window.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
        case 37:
            rec.moveLefh();
            break;
        case 39:
            rec.moveRight();
            break;
    }
})
window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37:
            rec.moveLefh();
            break;
        case 39:
            rec.moveRight();
            break;
    }
})