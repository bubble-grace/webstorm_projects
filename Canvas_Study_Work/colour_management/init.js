console.log("init.js is called")

canvas = document.querySelector('#myCanvas');

let ctx = canvas.getContext('2d');

let width = 800;

let height = 600;


// This is an array which in python was a list
let colArray=[

    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)",

    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",

    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"

]