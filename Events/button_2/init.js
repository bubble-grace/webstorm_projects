console.log("init.js is called")

canvas = document.querySelector('#myCanvas');

let ctx = canvas.getContext('2d');

let width = 800;

let height = 600;

canvas.width = width;
canvas.height = height;

console.log("init.js has been called")
let myScale = 0;

function setupCanvas (canvas){
    // Get the pixel ratio back to 1
    let dpr = window.devicePixelRatio || 1;
    myScale = dpr;
    // get the size of the CSS in HTML
    let rect = canvas.getBoundingClientRect();
    console.log(rect.width);
    console.log(rect.height);
}

// This is an array which in python was a list


let colArray=[

    ["rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)",
        "rgb(46,139,87)","rgb(102,205,170)","rgb(51,51,255)",
        "rgb(32,178,170)","rgb(47,79,79)", "rgb(0,128,128)"],

    ["rgb(0,139,139)", "rgb(0,255,255)", "rgb(224,255,255)",
        "rgb(0,206,209)","rgb(64,224,208)","rgb(51,51,255)",
        "rgb(176,224,230)","rgb(95,158,160)","rgb(70,130,180)"],

    [ "rgb(25,25,112)", "rgb(0,0,255)", "rgb(65,105,225)", "rgb(138,43,226)",
        "rgb(75,0,130)","rgb(106,90,205)","rgb(153,50,204)",
        "rgb(128,0,128)","rgb(216,191,216)"]]


console.log("grid js is called");

class Grid{
    constructor(w,h,intervalWidth,strokeColour,
                strokeWidth) {
        this.w =w;
        this.h =h;
        this.intervalWidth = intervalWidth;
        this.strokeColour = strokeColour;
        this.strokeWidth = strokeWidth;
    }
    update(){
        this.draw()
    }
    draw(){
        for(let i = -this.w; i <= this.w; i+=
            this.intervalWidth){
            this.drawLine(i, -this.h, i,
                this.h, this.strokeColour,
                this.strokeWidth);
        }
        for(let j = -this.h; j <= this.h; j +=
            this.intervalWidth){
            this.drawLine(-this.w,j, this.w,
                j, this.strokeColour,
                this.strokeWidth);
        }
    }

    drawLine(x_1,y_1,x_2,y_2,strokeColour,strokeWidth){
        ctx.beginPath();
        ctx.moveTo(x_1,y_1);
        ctx.lineTo(x_2,y_2);
        ctx.lineCap = "round";
        ctx.strokeStyle = strokeColour;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
    }

}