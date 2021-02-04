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


  const home = document.getElementById("home");
  const main = document.getElementById("main");
  const form = document.getElementById("form");
  const goHome = document.getElementById("goHome");
  const goMain = document.getElementById("goMain");
  const goForm = document.getElementById("goForm");
  goMain.addEventListener("click" ,e =>{
    main.classList.add("front");
    home.classList.remove("front");
    form.classList.remove("front");
  });
  goHome.addEventListener("click" ,e =>{
    main.classList.remove("front");
    home.classList.add("front");
    form.classList.remove("front");
  });
  goForm.addEventListener("click" ,e =>{
    main.classList.remove("front");
    home.classList.remove("front");
    form.classList.add("front");
  });
  
