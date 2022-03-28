console.log("The main is called")

let objectSet = []


let FDone = new FiveDot(400,100,60,colArray[1][5],colArray[1][6],colArray[0][0]);
let FDtwo = new FiveDot(275,200,20,colArray[1][5],colArray[1][6],colArray[0][0]);
let FDthree = new FiveDot(200,50,40,colArray[1][5],colArray[1][6],colArray[0][0]);
let FDfour = new FiveDot(150,300,80,colArray[1][5],colArray[1][6],colArray[0][0]);
objectSet.push(new Fivedotrotate(500,500,60,colArray[1][5],colArray[1][6],colArray[0][0], 60));

objectSet.push(FDone,FDtwo,FDthree,FDfour);
console.log(objectSet)
for(let i=0; i<objectSet.length; i++){
    objectSet[i].update();
}