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


const header = document.getElementById("header");
const home = document.getElementById("home");
const main = document.getElementById("main");
const form = document.getElementById("form");
const goHome = document.getElementById("goHome");
const goMain = document.getElementById("goMain");
const goMain2 = document.getElementById("goMain2");
const goForm = document.getElementById("goForm");
goMain.addEventListener("click" ,e =>{
  main.classList.remove("front");
  header.classList.remove("front");
  home.classList.add("front");
});
goMain2.addEventListener("click" ,e =>{
  header.classList.remove("front");
  main.classList.remove("front");
  home.classList.add("front");
});
goHome.addEventListener("click" ,e =>{
  main.classList.add("front");
  home.classList.remove("front");
  header.classList.add("front");
  reset();
});
goForm.addEventListener("click" ,e =>{
  header.classList.add("front");
  main.classList.add("front");
  form.classList.remove("front");
  reset();
});

