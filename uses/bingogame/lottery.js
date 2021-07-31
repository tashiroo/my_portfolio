
// ビンゴの抽選
let bingo = [];
let bingo2 = [];
let bingo3 = [];
let counter = 100;
let score = 0;
let indexNumbers = 0;
let rowIndexNumber = 0;
let colmnIndexNumber = 0;
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
        // console.log(bingo3.indexOf(number));
        counter--;
        indexNumbers = bingo3.indexOf(number);
        if(indexNumbers !== -1){
          // 抽選の数字と同じ数のテーブルの座標を出す
          rowIndexNumber = (indexNumbers+1)/5;
          colmnIndexNumber = (indexNumbers+1)%5-1;
          if(colmnIndexNumber == -1){
            colmnIndexNumber = 4;
          }
          console.log(Math.ceil(rowIndexNumber));
          console.log(colmnIndexNumber);
          // テーブル内のデータの取得→ビンゴカードの当たった数字の書き換えに使う
          let numbersMath = document.querySelector("table").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].firstChild.data;
          console.log(numbersMath);
        }
      }
    }
    
    // ビンゴカードの作成
    for(let i = 0;i < 15;i++){
      bingo2.push(i)    
    }
    for(let a = 0;a <5;a++){
      const tr = document.createElement("tr");
      for(let bingonunmber = 0;bingonunmber < 5;bingonunmber++){
        const td = document.createElement("td");
        const number2 = Math.floor(Math.random() * array.length);
        bingo2.splice(number2 -1,1);
        bingo3.push(number2);
        td.textContent = number2;
        tr.appendChild(td);
      }
      document.querySelector("tbody").appendChild(tr);
    }
    
    