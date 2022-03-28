console.log("init.js is called")

canvas = document.querySelector('#myCanvas');

let ctx = canvas.getContext('2d');

let width = 800;

let height = 600;


canvas.width = width;
canvas.height = height;

console.log("init.js has been called")


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
        "rgb(128,0,128)","rgb(216,191,216)"]

]