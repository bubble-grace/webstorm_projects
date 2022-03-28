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

    ["rgba(255,255,255, 0.7)", "rgba(153,153,153,0.7)", "rgba(0,0,0, 0.7)",
        "rgba(46,139,87,0.7)","rgba(102,205,170, 0.7)","rgba(51,51,255, 0.7)",
        "rgba(32,178,170, 0.7)","rgba(47,79,79, 0.7)", "rgba(0,128,128,0.7)"],

    ["rgba(255,255,255, 0.3)", "rgba(153,153,153, 0.3)", "rgba(0,0,0,0.3)",
        "rgba(46,139,87, 0.3)","rgba(102,205,170)","rgba(51,51,255, 0.3)",
        "rgba(32,178,170, 0.3)","rgba(47,79,79, 0.3)", "rgba(0,128,128, 0.3)"],

]