class InteractiveObject{
    constructor(){
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseleave', this.mLeave.bind(this));
        this.xStart = 0;
        this.yStart = 0;
        this.xMouse = 0;
        this.yMouse = 0;
        this.mouseIsDown = false;
    }
    mDown(e){
        this.xStart = e.offsetX;
        this.yStart = e.offsetY;
        this.mouseIsDown = true;
        let output = "This mouse went down at x = " + e.offsetX + "and y = " + e.offsetY;
        console.log (output)
    }
    mUp(e){
        this.mouseIsDown = false;
        let output = "This mouse went up at x = " + e.offsetX + "and y = " + e.offsetY;
        console.log(output)
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("moving")
    }
    mLeave(e){
        console.log("Mouse has left the canvas")
    }

}

class InteractiveBall extends InteractiveObject{
    constructor(x,y,r,fill,stroke, strokeWidth) {
        super();
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = fill;
        this.current_fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }

    mDown(e){
        super.mDown(e)
        if (this.getBoundary(this.x, this.y, this.xMouse, this.yMouse, this.r )){
            InteractiveBall.taken = this;
        }
    }

    update(){
        this.draw();
        if(InteractiveBall.taken === this){
            this.x = this.xMouse;
            this.y = this.yMouse;
            this.current_fill = "rgb(255, 200, 150)"
        }
        if(!this.mouseIsDown){
            InteractiveBall.taken = "";
            this.current_fill = this.fill
        }
    }

    getBoundary(x_c, y_c, x_m, y_m, r){
        let d = Math.sqrt(Math.pow(x_m - x_c, 2)+ Math.pow(y_m - y_c, 2))
        console.log(d)
        if(d<r){
            return true
        }
        else{
            return false
        }


    }

    draw(){
        this.drawCircle(this.x, this.y, this.r, this.current_fill, this.stroke, this.strokeWidth)
    }

    drawCircle(x,y,r,f,s,l){
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fillStyle = f;
        ctx.strokeStyle = s;
        ctx.lineWidth = l;
        ctx.fill();
        ctx.stroke();
    }
}
