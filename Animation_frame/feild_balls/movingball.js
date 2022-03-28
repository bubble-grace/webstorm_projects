class MovingGroup{
    constructor(x_b, y_b, H) {
        console.log("test")


        this.objectSet = []
        for(let i = 0 ; i< 100 ; i++){
            let T = 1000 + 500*Math.random()
            let xIS = 0.5+Math.random();
            let r = 5 + 25*Math.random()
            let c = Math.floor(9*Math.random())
            let t = Math.floor(2*Math.random())
            let temp = new MovingBall(x_b,y_b,r, colArray[t][c],T,H,xIS)
            this.objectSet.push(temp)


        }

    }
    update(){
        // draw back group rect
        for(let i = 0; i< this.objectSet.length; i++){
            this.objectSet[i].update()
        }

    }
}





class MovingBall {
    constructor(x_b, y_b, r, fillcolour, T, H, xIS) {
        this.x_b = x_b;
        this.y_b = y_b;
        this.r = r;
        this.fillcolour = fillcolour;
        this.t = T * Math.random();
        this.T = T;
        this.H = H;
        this.xIntervalShift = xIS;

    }

    update() {
        this.t += 1;
        this.draw();
    }

    draw() {
        let y = this.linearinterpolate(this.t, this.T, this.H);
        let x = this.linearinterpolate(this.t, this.T * this.xIntervalShift, this.H);
        this.drawCircle(x + this.x_b, y + this.y_b, this.r);
    }

    drawCircle(x, y, r) {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI),
            ctx.fillStyle = this.fillcolour;
        ctx.fill();
        console.log("the ball is formed")
    }

    linearinterpolate(t, T, H) {
        t = t % T;
        let y;
        if (t < T / 2) {
            y = (-2 * H * t) / (T) + H
        } else {
            y = (2 * H * t) / T - H
        }
        return y
    }
}
