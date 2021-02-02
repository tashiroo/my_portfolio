const topBtn= document.getElementById("topBtn");
const animationFont = document.getElementById("animationFont");
const downMove1 = document.getElementById("downMove1");
const downMove2 = document.getElementById("downMove2");
const downMove3 = document.getElementById("downMove3");
topBtn.addEventListener("click" ,e =>{
  topBtn.classList.toggle("animationBtn");
  animationFont.classList.toggle("animationFont");
  downMove1.classList.toggle("down");
  downMove2.classList.toggle("down");
  downMove3.classList.toggle("down");
});

