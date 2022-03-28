console.log("loops.js is called")

function drawCircle (x,y,R, fillC, strokeC, lineW, fill, stroke){
    ctx.beginPath()
    ctx.arc(x, y, R, 0, 2*Math.PI);
    if (fill === true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke === true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

for (let i = 0 ; i < 10 ;){
    for (let j = 0 ; j < 10 ;){
        drawCircle(100 + 70*i, 100 + 70*j, 15, colArray[1], colArray[3],2, true, true )
        i += 1
    }
}
