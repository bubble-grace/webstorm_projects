function drawRect (x,y,w, h, lineW, fillC, fill, stroke) {
    ctx.beginPath()
    ctx.rect(x, y, w, h);
    if (fill === true) {
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if (stroke === true) {
        ctx.lineWidth = lineW;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}