// function drow(){

   
//    let canvas = document.getElementById("canvas");
//    let ctx = canvas.getContext("2d");
   
//    ctx.beginPath();
//    ctx.rect(20,20,20,20,Math.PI*2)
//    ctx.fillStyle = "black";
//    ctx.fill();
//    ctx.closePath();
// }
// drow();
const bingo2 =[];
const bingo3 =[];
for(let a = 0;a < 5;a++){
  const tr = document.createElement("tr");
  bingo2.length = 0;
  bingo3.length = 0;
  for(let b = 1;b<= 15;b++){
    bingo2.push(b);
  }
  const bingo4 = bingo2.map(number => number+15*a);
  for(let bingonunmber = 0;bingonunmber < 5;bingonunmber++){
    const td = document.createElement("td");  
    let number2 = Math.floor(Math.random() * bingo4.length);
    console.log(bingo4[number2]);
    td.textContent = bingo4[number2];
    tr.appendChild(td);
    bingo3.push(number2);
    bingo4.splice(number2 ,1);
  }
    // console.log(bingo3);
    document.querySelector("tbody").appendChild(tr);
  }