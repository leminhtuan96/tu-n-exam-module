
// select canvas element

const canvas = document.getElementById("myCanvas");

// getContext of canvas = methods and properties to draw and do a lot of thing to the canvas

const ctx = canvas.getContext('2d');


// Đối tượng bóng

const ball = {

    x : canvas.width/2,

    y : canvas.height/2,

    radius : 10,

    velocityX : 5,

    velocityY : 5,

    speed : 7,

    color : "WHITE"

}

// ng dung Paddle

const user = {

    x : 0, //bên trái của canvas

    y : (canvas.height - 100)/2, // -100 chiều cao của mái chèo

    width : 10,

    height : 100,

    score : 0,

    color : "WHITE"

}

// may Paddle

const com = {

    x : canvas.width - 10, // - chiều rộng của mái chèo

    y : (canvas.height - 100)/2, // -100 chiều cao của mái chèo

    width : 10,

    height : 100,

    score : 0,

    color : "WHITE"

}

// luoi

const net = {

    x : (canvas.width - 2)/2,

    y : 0,

    height : 10,

    width : 2,

    color : "WHITE"

}

// ve hinh chu nhat

function drawRect(x, y, w, h, color){

    ctx.fillStyle = color;

    ctx.fillRect(x, y, w, h);

}

// ve bong

function drawArc(x, y, r, color){

    ctx.fillStyle = color;

    ctx.beginPath();

    ctx.arc(x,y,r,0,Math.PI*2,true);

    ctx.closePath();

    ctx.fill();

}

// su kien chuot

canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt){

    let rect = canvas.getBoundingClientRect();



    user.y = evt.clientY - rect.top - user.height/2;

}

// khi may hoac ng choi ghi ban dat lai bong

function resetBall(){

    ball.x = canvas.width/2;

    ball.y = canvas.height/2;

    ball.velocityX = -ball.velocityX;

    ball.speed = 7;

}

// ke luoi

function drawNet(){

    for(let i = 0; i <= canvas.height; i+=15){

        drawRect(net.x, net.y + i, net.width, net.height, net.color);

    }

}

// ve diem

function drawText(text,x,y){

    ctx.fillStyle = "#FFF";

    ctx.font = "75px fantasy";

    ctx.fillText(text, x, y);

}

// phat hien va cham

function collision(b,p){

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

// chuc nang thuc hien tat ca cac phep tinh

function update(){



    // thay đổi điểm số của người chơi, nếu bóng đi về bên trái "ball.x <0" máy tính thắng, ngược lại nếu "ball.x> canvas.width" thì người dùng thắng

    if( ball.x - ball.radius < 0 ){

        com.score++;


        resetBall();

    }else if( ball.x + ball.radius > canvas.width){

        user.score++;


        resetBall();

    }



    // quả bóng có vận tốc

    ball.x += ball.velocityX;

    ball.y += ball.velocityY;



    // máy tính tự chơi và chúng ta phải có khả năng đánh bại nó

    //AI đơn giản

    com.y += ((ball.y - (com.y + com.height/2)))*0.1;



    // khi quả cầu va chạm vào thành đáy và thành trên ta nghịch chuyển vận tốc y.

    if(ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height){

        ball.velocityY = -ball.velocityY;

       // wall.play();

    }



    // chúng tôi kiểm tra xem mái chèo chạm vào người dùng hay mái chèo com

    let player = (ball.x + ball.radius < canvas.width/2) ? user : com;



    // nếu quả bóng chạm vào mái chèo

    if(collision(ball,player)){

        // phát âm thanh

       // hit.play();

        //chúng tôi kiểm tra vị trí quả bóng chạm vào mái chèo

        let collidePoint = (ball.y - (player.y + player.height/2));

        // chuẩn hóa giá trị của collidePoint, chúng ta cần lấy các số từ -1 đến 1.

        // -player.height/2 < collide Point < player.height/2

        collidePoint = collidePoint / (player.height/2);



        // khi bóng chạm đỉnh mái chèo, chúng ta muốn bóng, lấy góc -45 độ

        // khi quả bóng chạm vào tâm của mái chèo, chúng ta muốn quả bóng có một góc 0độ

        // khi bóng chạm đáy mái chèo, chúng ta muốn bóng bay 45 độ

        // Math.PI / 4 = 45độ

        let angleRad = (Math.PI/4) * collidePoint;



        // thay đổi hướng vận tốc X và Y

        let direction = (ball.x + ball.radius < canvas.width/2) ? 1 : -1;

        ball.velocityX = direction * ball.speed * Math.cos(angleRad);

        ball.velocityY = ball.speed * Math.sin(angleRad);



        // tăng tốc độ bóng mỗi khi một mái chèo chạm vào nó.

        ball.speed += 0.1;

    }

}

// chức năng kết xuất, chức năng thực hiện tất cả các bản vẽ

function render(){



    // xóa phông nền

    drawRect(0, 0, canvas.width, canvas.height, "#000");



    // kéo điểm người dùng sang bên trái

    drawText(user.score,canvas.width/4,canvas.height/5);



    //vẽ điểm COM sang bên phải

    drawText(com.score,3*canvas.width/4,canvas.height/5);



    // kéo lưới

    drawNet();



    // vẽ mái chèo của người dùng

    drawRect(user.x, user.y, user.width, user.height, user.color);



    // vẽ mái chèo của COM

    drawRect(com.x, com.y, com.width, com.height, com.color);



    // vẽ bóng

    drawArc(ball.x, ball.y, ball.radius, ball.color);

}

function game(){

    update();

    render();

}

// số khung hình mỗi giây

let framePerSecond = 50;

//gọi chức năng trò chơi 50 lần mỗi 1 giây

let loop = setInterval(game,1000/framePerSecond);