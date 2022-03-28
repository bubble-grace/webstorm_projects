

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

function RotateRect(x,y,w,h,fillcolour,rotation){
    ctx.save();
    ctx.translate(x+w*0.5, y+0.5*h)
    console.log(x+w*0.5, y+0.5*h)
    ctx.rotate(rotation*Math.PI/180)
    drawRect(-w*0.5, -h*0.5, w,h,2,fillcolour,true,true)
    ctx.restore()
}


RotateRect(200,100,70,50,colArray[5],45)