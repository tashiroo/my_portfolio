    let bingo = [];
    let counter = 100;
  for(let i = 1;i <= 100;i++){
    bingo.push(i);
  }
  let array = bingo;
  const nl = document.getElementById("nl");
  const btn = document.getElementById("btn");
  function btnClick(){
    if(counter > 0){
      const number = array[Math.floor(Math.random() * array.length)];
      const array2 = array.filter((value)=>{
        return value !== number;
      });
      array = array2;
      bingo.splice(number -1,1,"●");
      console.log(bingo,number);
      nl.innerHTML = number; 
      counter--;
    }
  }
  