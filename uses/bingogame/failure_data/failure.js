// 書き直す前のコード

for(let a = 0;a <5;a++){
  const tr = document.createElement("tr");
  for(let bingonunmber = 0;bingonunmber < 5;bingonunmber++){
    const td = document.createElement("td");
    let number2 = Math.floor(Math.random() * bingo2.length);
    if(number2 <= 15*bingonunmber){
      if(number2 < 15){
        om = bingonunmber;
        number2 += 15*om;
      }else{
        om = Math.floor(bingonunmber*15/number2);
        number2 += 15* om;
      }
    }else if(15+15*bingonunmber < number2){
      if(number2 <15){
        om = bingonunmber;
        number2 -=  15*om;
      }else{
        om = Math.floor(number2/15);
        if(om == number2/15){
          number2 -= 15*(om-bingonunmber*2);
        }else{
          number2 -= 15*om-bingonunmber;
        }
      }
    }
    bingo2.splice(number2 -1,1);
    bingo3.push(number2);
    td.textContent = number2;
    tr.appendChild(td);
    console.log(bingo2.length,bingo2[number2-1]);
    }
  document.querySelector("tbody").appendChild(tr);
}
