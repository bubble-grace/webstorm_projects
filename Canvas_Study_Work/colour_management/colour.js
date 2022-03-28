
console.log("colour.js is called")

// the big canvas

canvas.width = width;

canvas.height = height;

ctx.fillStyle = (colArray[2]);
ctx.strokeStyle = (colArray[6]);
ctx.lineWidth = 6;
ctx.beginPath();
ctx.rect(75, 80, 300, 200);
ctx.fill ();
ctx.stroke();

ctx.fillStyle = (colArray[4]);
ctx.strokeStyle = (colArray[8]);
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(400, 300, 44, 0, 2*Math.PI);
ctx.fill ();
ctx.stroke();

ctx.strokeStyle = (colArray[3]);
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(400,10)
ctx.lineTo(400,500)
ctx.stroke();



// Not in the file
//let myImage = new Image(188, 212);
//myImage.src = 'panda.jpg';
//ctx.drawImage(myImage);