console.log("function.js is called")

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

function drawRect (x,y,w, h, lineW, fillC, fill, stroke){
    ctx.beginPath()
    ctx.rect(x, y, w, h);
    if (fill === true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke === true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}

function drawLine (x,y,x1, y1, lineW, fillC, fill, stroke){
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x1,y1)
    if (fill === true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke === true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}

drawCircle(100, 200, 50, colArray[1], colArray[3],2, true, true )
drawCircle(150, 200, 50, colArray[1], colArray[3],2, true, true )
drawCircle(200, 200, 50, colArray[1], colArray[3],2, true, true )
drawCircle(250, 200, 50, colArray[1], colArray[3],2, true, true )

drawRect(300, 200, 150, 200, 2,colArray[1], true, true )
drawRect(325, 200, 150, 200, 2,colArray[1], true, true )
drawRect(350, 200, 150, 200, 2,colArray[1], true, true )

drawLine(550, 200, 550, 400, 2,colArray[1], true, true )
drawLine(545, 200, 545, 400, 2,colArray[1], true, true )
drawLine(540, 200, 540, 400, 2,colArray[1], true, true )
drawLine(535, 200, 535, 400, 2,colArray[1], true, true )