
// ビンゴの抽選
let bingo = [];
let bingo2 = [];
let bingo3 = [];
let om =0;
let counter = 75;
let score = 0;
let rowIndexNumber = 0;
  let colmnIndexNumber =0;
for(let i = 1;i <= 75;i++){
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
          // 新しいコードを入れたらずれておかしくなったが↓のコードに-1したら正常に起動するようになった
          rowIndexNumber = (indexNumbers+1)/5-1;
          colmnIndexNumber = (indexNumbers+1)%5-1;
          if(colmnIndexNumber == -1){
            colmnIndexNumber = 4;
          }
          let numbersMath = document.querySelector("tbody").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].firstChild.data;
          // ↑テーブル内のデータの取得→ビンゴカードの当たった数字を●に入れ替えたい
          document.querySelector("tbody").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].textContent = "●";
          console.log(numbersMath);
        }
      }
    }
    
    // ビンゴカードの作成
    for(let a = 0;a < 5;a++){
      const tr = document.createElement("tr");
      bingo2.length = 0;
      for(let b = 1;b<= 15;b++){
        bingo2.push(b);
      }
      const bingo4 = bingo2.map(number => number+15*a);
      for(let bingonunmber = 0;bingonunmber < 5;bingonunmber++){
        const td = document.createElement("td");  
        let number2 = Math.floor(Math.random() * bingo4.length);
        td.textContent = bingo4[number2];
        tr.appendChild(td);
        bingo3.push(bingo4[number2]);
        bingo4.splice(number2 ,1);
      }
      document.querySelector("tbody").appendChild(tr);
    }
    console.log(bingo3);
      // 8/04 仕上げとしてscoreを実施し