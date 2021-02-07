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

function reset() {
  downMove1.classList.remove("down");
  downMove2.classList.remove("down");
  downMove3.classList.remove("down");
  topBtn.classList.remove("animationBtn");
  animationFont.classList.remove("animationFont");
 }


 function goMainEv() {
  header.classList.remove("hide");
  main.classList.remove("hide");
  home.classList.add("hide");
  form.classList.add("hide");
 }

const header = document.getElementById("header");
const home = document.getElementById("home");
const main = document.getElementById("main");
const form = document.getElementById("form");
const goHome = document.getElementById("goHome");
const goMain = document.getElementById("goMain");
const goMain2 = document.getElementById("goMain2");
const goForm = document.getElementById("goForm");
goMain.addEventListener("click" ,e =>{
  goMainEv();
});
goMain2.addEventListener("click" ,e =>{
  goMainEv();
});
goHome.addEventListener("click" ,e =>{
  main.classList.add("hide");
  home.classList.remove("hide");
  header.classList.add("hide");
  form.classList.add("hide");
  reset();
});
goForm.addEventListener("click" ,e =>{
  main.classList.add("hide");
  form.classList.remove("hide");
});
