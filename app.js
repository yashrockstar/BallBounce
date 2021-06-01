document.getElementById("myCanvas").addEventListener("click", function (event) {
    console.log(event);
    var a = event.clientX;
    var b = event.clientY;
    var coordi = "X : " + a + ", Y : " + b;

    document.getElementById("demo").innerHTML = coordi;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var gravity = 0.2;

    var BallConst = function () {
        this.x = a;
        this.y = b;
        this.speedx = 2;
        this.speedy = 6;
    }

    BallConst.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    BallConst.prototype.move = function () {
        this.x += this.speedx;
        this.y += this.speedy;
    }

    BallConst.prototype.collision = function () {
        if (this.x < 20 || this.x > 1330) {
            this.speedx = -this.speedx;
        }
        if (this.y < 20 || this.y > 555) {
            this.speedy = -this.speedy * 0.8;
        }
        else {
            this.speedy += gravity;
        }
    }


    var ball = new BallConst();

    setInterval(function () {
        ctx.clearRect(0, 0, 1350, 575);
        ball.draw();
        ball.move();
        ball.collision();
    }, 10)
});