class InteractiveObject{
    constructor(){
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseleave', this.mLeave.bind(this));
        canvas.addEventListener('click', this.mClick.bind(this));
        this.xStart = 0;
        this.yStart = 0;
        this.xMouse = 0;
        this.yMouse = 0;
        this.mouseIsDown = false;
    }
    mClick(){
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
class InteractiveButton extends InteractiveObject {
    constructor(x, y, w, h, fill, over, selected, stroke,text, textColour) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.over = over;
        this.selected = selected;
        this.stroke = stroke;
        this.text = text;
        this.textColour = textColour;
        this.inBounds = false;
    }
    update(){
        this.inBounds = this.getBoundary(this.x,this.y, this.w, this.h,
            this.xMouse, this.yMouse)
        let fill = this.fill;
        if(InteractiveButton.selected ===this){
            fill = this.selected
        }else if (this.inBounds){
            fill =this.over
        }
        this.draw(this.x,this.y,this.w,this.h,fill, this.stroke,this.text,
            this.textColour)
    }
    mClick(){
        if(this.inBounds){
            InteractiveButton.selected = this;
        }
    }
    getBoundary(x,y,w,h,x_m,y_m){
        if(x_m>x && x_m < x+ w && y_m > y && y_m < y +h){
            return true;
        }
        else{
            return false;
        }
    }

    draw(x,y,w,h,c,s, txt, txtCol){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = s;
        ctx.fillStyle =c;
        ctx.fill();
        ctx.stroke();

        let myFont = "bold 50 px 'Trebuchet MS', Verdana, sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = myFont;

        ctx.fillStyle = txtCol;
        ctx.fillText(txt, x + w/2, y + h/2)
    }
}
InteractiveButton.selected = null;


class Manager extends InteractiveObject {
    constructor(x, y, w, h, fill) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.leftRectangle = new Rectangle(10, 10, 250, 400, "rgb(0,0,0)")
        this.rightRectangle = new Rectangle(540, 10, 250, 400, "rgb(0,0,0)")
    }

    update(){
        this.leftRectangle.update();
        this.rightRectangle.update();
    }
    mClick(){
        let l = this.leftRectangle
        let r = this.rightRectangle
        let name = InteractiveButton.selected.text;
        console.log(name)
        if(name === "red"){
            l.fill = "rgb(255,0,0)"
            this.update()
        }
        else if(name === "orange"){
            r.fill = "rgb(255,121,0)"
            this.update()
        }
        else if(name === "yellow"){
            l.fill = "rgb(250,253,15)"
            this.update()
        }
        else if(name === "green"){
            r.fill = "rgb(0,255,0)"
            this.update()
        }
        else if(name === "blue"){
            l.fill = "rgb(0,0,255)"
            this.update()
        }

    }

}
class Rectangle{

    constructor(x,y,w,h,fill,){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
    }

}
