class TextBox{
    constructor(x,y, width, fillColour,txtColour) {
        this.x = x;
        this.y=y;
        this.w = width;
        this.h = 50;
        this.txt = "Placeholder";
        console.log(this.txt);
        this.fillColour = fillColour;
        this.txtColour = txtColour;
    }
    update(txt = "Placeholder"){
        this.txt = txt
        this.draw()
    }
    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fillColour;
        ctx.fill();
        ctx.font = "20 px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.txtColour;
        ctx.fillText(this.txt, this.x+this.w/2, this.y+this.h/2);
    }
}