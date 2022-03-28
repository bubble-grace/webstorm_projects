

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

ctx.save()
ctx.translate(300,200);

for (let i = 0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180)
    drawRect(0,0, 100, 200, 2,colArray[1], true, true)

}
ctx.restore()


ctx.save()
ctx.translate(50,50);

for (let i = 0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180)
    drawRect(0,0, 50, 50, 2,colArray[1], false, true)

}
ctx.restore()