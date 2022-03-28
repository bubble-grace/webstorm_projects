function drawRect(x,y,w, h, lineW, fillC, fill, stroke){
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

let x = 10;
let y = 30;
let s = 40;

for ( let i=0; i<colArray.length; i++){
    for ( let j=0; j<colArray[i].length; j++){
        console.log(colArray[i][j])
        drawRect(x+j*s, y+i*s, s,s,2,colArray[i][j], true, true)
    }
}