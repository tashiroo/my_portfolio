
// ビンゴの抽選
let bingo = [];
let bingo2 = [];
let bingo3 = [];
let om =0;
let counter = 100;
let score = 0;
let rowIndexNumber = 0;
  let colmnIndexNumber =0;
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
        nl.textContent = number; 
        counter--;
        const indexNumbers = bingo3.indexOf(number);
        if(indexNumbers !== -1){
          // 抽選の数字と同じ数のテーブルの座標を出す
          rowIndexNumber = (indexNumbers+1)/5;
          colmnIndexNumber = (indexNumbers+1)%5-1;
          if(colmnIndexNumber == -1){
            colmnIndexNumber = 4;
          }
          console.log(Math.ceil(rowIndexNumber));
          console.log(colmnIndexNumber);
          let numbersMath = document.querySelector("table").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].firstChild.data;
          // ↑テーブル内のデータの取得→ビンゴカードの当たった数字を●に入れ替えたい
          document.querySelector("table").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].textContent = "●";
          // 起きたバグ 抽選された番号にうまく切り替えができず●が抜けてしまう 
          // 原因１ 同じ数字が複数ビンゴカードに入ってしまっている
          // 原因２ 本来抽選されない0がビンゴカードの中に入ってしまっている
          // 後は演出を入れて見栄えをよくしたい バグを取ったら
          console.log(numbersMath);
        }
      }
    }
    
    // ビンゴカードの作成
    for(let i = 1;i <= 75;i++){
      bingo2.push(i);   
    }
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
    