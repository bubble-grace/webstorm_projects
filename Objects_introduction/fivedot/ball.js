class FiveDot{
    constructor(xc,yc,s,c1,c2,c3, c4, c5, c6, c7){
        this.xc = xc;
        this.yc = yc;
        this.s = s;
        this.r = s/8;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c5 = c5;
        this.c6 = c6;
        this.c7 = c7;
        this.c4 = c4;
    }

    update(){
        this.draw()
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.xc-this.s/2, this.yc-this.s/2, this.s, this.s);
        ctx.fillStyle = this.c1;
        ctx.fill();
        this.drawCircle(this.xc-this.s/2, this.yc-this.s/2, this.r,this.c4);
        this.drawCircle(this.xc+this.s/2, this.yc-this.s/2, this.r,this.c5);
        this.drawCircle(this.xc-this.s/2, this.yc+this.s/2, this.r,this.c6);
        this.drawCircle(this.xc+this.s/2, this.yc+this.s/2, this.r,this.c7);
        this.drawCircle(this.xc, this.yc, this.r,this.c3);
    }

    drawCircle(x,y,r,col){
        ctx.beginPath();
        ctx.arc(x,y,r,0, 2*Math.PI);
        ctx.fillStyle = col
        ctx.fill()
    }

}

