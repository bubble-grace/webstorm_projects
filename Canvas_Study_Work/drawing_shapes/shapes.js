console.log("Drawing.js is called")

canvas = document.querySelector('#myCanvas');

let ctx = canvas.getContext('2d');

let width = 800;

let height = 600;

canvas.width = width;

canvas.height = height;

ctx.fillStyle = "rgb(152,100, 0)";
ctx.strokeStyle = "rgb(0,0,200)";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.rect(75, 80, 300, 200);
ctx.fill ();
ctx.stroke();

ctx.fillStyle = "rgb(152,100, 0)";
ctx.strokeStyle = "rgb(0,0,200)";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(400, 300, 44, 0, 2*Math.PI);
ctx.fill ();
ctx.stroke();

ctx.strokeStyle = "rgb(0,0,200)";
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(400,10)
ctx.lineTo(400,500)
ctx.stroke();