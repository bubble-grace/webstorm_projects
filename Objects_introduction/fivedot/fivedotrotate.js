class Fivedotrotate{
    constructor(xc,yc,s,c1,c2,c3, ang){
        this.xc = xc;
        this.yc = yc;
        this.s = s;
        this.r = s/8;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.ang = ang;
    }

    update(){
        this.draw()
    }

    draw(){
        ctx.save();
        ctx.translate(this.xc, this.yc);
        ctx.rotate(this.ang*Math.PI/180);

        ctx.beginPath();
        ctx.rect(-this.s/2, -this.s/2, this.s, this.s);
        ctx.fillStyle = this.c1;
        ctx.fill();
        this.drawCircle(-this.s/2, -this.s/2, this.r,this.c2);
        this.drawCircle(+this.s/2, -this.s/2, this.r,this.c2);
        this.drawCircle(-this.s/2, +this.s/2, this.r,this.c2);
        this.drawCircle(+this.s/2, +this.s/2, this.r,this.c2);
        this.drawCircle(0, 0, this.r,this.c3);
        ctx.restore()
    }

    drawCircle(x,y,r,col){
        ctx.beginPath();
        ctx.arc(x,y,r,0, 2*Math.PI);
        ctx.fillStyle = col
        ctx.fill()
    }

}

