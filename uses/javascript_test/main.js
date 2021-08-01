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
let number = Math.floor(Math.random()*15);
for(let i = 0;i < 5;i++){
  number += 15*i;
  console.log(number);  
  number = Math.floor(Math.random()*15)
}