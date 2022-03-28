

class MovingBall{
    constructor(x_b, y_b, r, fillcolour, T, H, xIS){
        this.x_b = x_b;
        this.y_b = y_b;
        this.r = r;
        this.fillcolour = fillcolour;
        this.t = T*Math.random();
        this.T = T;
        this.H = H;
        this.xIntervalShift = xIS;

    }

    update(){
        this.t += 1;
        this.draw();
    }

    draw(){
        let y= this.linearinterpolate(this.t, this.T, this.H);
        let x = this.linearinterpolate(this.t, this.T*this.xIntervalShift, this.H);
        this.drawCircle(x+this.x_b, y+this.y_b, this.r);
    }

    drawCircle(x,y,r){
        ctx.beginPath()
        ctx.arc(x,y,r,0,2*Math.PI),
        ctx.fillStyle = this.fillcolour;
        ctx.fill();
        console.log("the ball is formed")
    }
    linearinterpolate(t, T, H){
        t = t%T;
        let y;
        if (t<T/2){
            y = (-2*H*t)/(T)+H
        }
        else{
            y = (2*H*t)/T -H
        }
        return y
    }
}