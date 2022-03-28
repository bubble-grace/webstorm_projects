console.log("main js called")

//let B = new Ball(300, 200, 25, colArray[0][8]);
//B.area();
//B.update();

let ball_set = []
for (let i=0; i<10; i++){
    let c = i%colArray[0].length
    let temp = new Ball(200+i*60, 400, 25, colArray[0][c])
    ball_set.push(temp);
}

for(let j=0;j<ball_set.length;j++){
    ball_set[j].update();
}

let ball_set = []
for (let i=0; i< colArray.length; i++){
    for(let j=0; j< colArray[i].length ; j++){
        let temp = new Ball(200+j*60, 300+60*i, 25, colArray[i][j])
        ball_set.push(temp);
    }
}

for(let i=0;i<ball_set.length;i++){
    ball_set[i].update();
}