
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
          rowIndexNumber = (indexNumbers+1)/5;
          colmnIndexNumber = (indexNumbers+1)%5-1;
          if(colmnIndexNumber == -1){
            colmnIndexNumber = 4;
          }
          console.log(Math.ceil(rowIndexNumber));
          console.log(colmnIndexNumber);
          let numbersMath = document.querySelector("tbody").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].firstChild.data;
          // ↑テーブル内のデータの取得→ビンゴカードの当たった数字を●に入れ替えたい
          document.querySelector("tbody").rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].textContent = "●";
          // 起きたバグ 抽選された番号にうまく切り替えができず●が抜けてしまう 
          // 原因１ 同じ数字が複数ビンゴカードに入ってしまっている
          // 原因２ 本来抽選されない0がビンゴカードの中に入ってしまっている
          // 後は演出を入れて見栄えをよくしたい バグを取ったら
          console.log(numbersMath);
        }
      }
    }
    
    // ビンゴカードの作成
    for(let a = 0;a < 5;a++){
      const tr = document.createElement("tr");
      bingo2.length = 0;
      bingo3.length = 0;
      for(let b = 1;b<= 15;b++){
        bingo2.push(b);
      }
      const bingo4 = bingo2.map(number => number+15*a);
      for(let bingonunmber = 0;bingonunmber < 5;bingonunmber++){
        const td = document.createElement("td");  
        let number2 = Math.floor(Math.random() * bingo4.length);
        td.textContent = bingo4[number2];
        tr.appendChild(td);
        bingo3.push(number2);
        bingo4.splice(number2 ,1);
      }
        // console.log(bingo3);
        document.querySelector("tbody").appendChild(tr);
      }
      // 8/03 昨日のコードを適応させたビンゴカードは完成したが今度は抽選した番号と別の箇所の数字が●に置き換わってしまうようになった