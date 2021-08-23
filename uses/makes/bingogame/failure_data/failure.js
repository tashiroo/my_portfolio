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

function btnClick(){
  if(counter > 0){
    const number = array[Math.floor(Math.random() * array.length)];
    const array2 = array.filter((value)=>{
      return value !== number;
    });
    array = array2;
    bingo.splice(number -1,1,"●");
        console.log(bingo,number);
        nl.textContent = number; 
        counter--;
        const indexNumbers = bingo3.indexOf(number);
        if(indexNumbers !== -1){
          // 抽選の数字と同じ数のテーブルの座標を出す
          // 新しいコードを入れたらずれておかしくなったが↓のコードに-1したら正常に起動するようになった
          rowIndexNumber = (indexNumbers+1)/5;
          colmnIndexNumber = (indexNumbers+1)%5-1;
          if(colmnIndexNumber == -1){
            colmnIndexNumber = 4;
          }
          let numbersMath = document.querySelector("tbody").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].firstChild.data;
          // ↑テーブル内のデータの取得→ビンゴカードの当たった数字を●に入れ替えたい
          document.querySelector("tbody").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].textContent = "●";
          console.log(numbersMath);
          bingo3.splice(indexNumbers,1,"●");
        }
        for(let c =0;c<5;c++){
          let LineUpR = bingo3.slice(0+5*c,5+5*c);
          let LineUpC =[ bingo3[c],bingo3[c+5],bingo3[c+10],bingo3[c+15],bingo3[c+20]];
          console.log(LineUpR.join(""));
          console.log(LineUpC.join(""));
        }
      }
    }