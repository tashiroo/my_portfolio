
// ビンゴの抽選
let bingo = [];
let bingo2 = [];
let bingo3 = [];
let lineUp = [];
let om =0;
let counter = 75;
let score = 0;
let btncl = 0;
let rowIndexNumber = 0;
let colmnIndexNumber =0;
let bccl = "";
let tbody = document.querySelector("tbody");
const bingoNumberBoard = document.getElementById("bingoNumberBoard");
for(let i = 1;i <= 75;i++
  ){
  bingo.push(i);
}
let array = bingo;
const nl = document.getElementById("nl");
const btn = document.getElementById("btn");
const lotteryBtn = document.getElementById("lotteryBtn");
const clearBingo = document.getElementById("clearBingo");
function btnClick(){
  if(counter > 0){
    const number = array[Math.floor(Math.random() * array.length)];
    const array2 = array.filter((value)=>{
      return value !== number;
    });
    array = array2;
    bingo.splice(number -1,1,"●");1
    // console.log(bingo,number);
    // ↑数字抽選確認用のコードこれは残しておく
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
      tbody.rows[Math.ceil(rowIndexNumber)].cells[colmnIndexNumber].textContent = "●";
      // ↑テーブル内のデータの取得→ビンゴカードの当たった数字を●に入れ替えたい
      bingo3.splice(indexNumbers,1,"●");
    }
    for(let c =0;c<5;c++){
      let lineUpR = bingo3.slice(0+5*c,5+5*c);
      let lineUpC =[bingo3[c],bingo3[c+5],bingo3[c+10],bingo3[c+15],bingo3[c+20]];
      const lineUpCloss1 = [bingo3[0],bingo3[6],bingo3[12],bingo3[18],bingo3[24]];
      const lineUpCloss2 = [bingo3[20],bingo3[16],bingo3[12],bingo3[8],bingo3[4]];
      const lineUps = [lineUpR,lineUpC,lineUpCloss1,lineUpCloss2];
      for(let howBingo of lineUps){
        if(howBingo.join("") == "●●●●●"){
          score =score + 1;
          if(score > 0){
            counter = 0;
            toggleChilds();
          }
        }
      }
    }
  }
}

// ビンゴカードの作成
function bingoCard(){
  
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
        tr.appendChild(td);
        bingo3.push(bingo4[number2]);
        if(bingo3.length == 13){
          td.textContent = "FREE";
          bingo3.splice(12,1,"●");
          td.classList.add("centerTd");
        }else{
          td.textContent = bingo4[number2];
        }
        bingo4.splice(number2 ,1);
      } 
      tr.classList.add(`click${btncl}`);
      // ↑ビンゴを更新するときにtrが倍に増えてしまうためいつ作られたか確認する
      tbody.appendChild(tr);
    }
    bingoNumberBoard.appendChild(tbody);
    // console.log(bingo3);
  }

    bingoCard();
// 8/04 仕上げとしてscoreを実施

function returnBtn(){
  // 消えるけど個の子要素は親要素に存在しませんというエラーが出る
  // 上記は解決
  // 再度ビンゴカードを作成すると以前のデータも作られてしまうのを改善する
  resetNumber();
  btncl= btncl +1;
  toggleChilds();
  tbody = document.createElement("tbody");
  bingoCard();
  
  const prevBingo = document.getElementsByClassName(`click${btncl}`);
}

function toggleChilds(){
  lotteryBtn.classList.toggle("hide");
  clearBingo.classList.toggle("hide");
}

function resetNumber(){
  bingo = [];
  bingo2 = [];
  bingo3 = [];
  lineUp = [];
  om =0;
  counter = 75
  score =0;
  rowIndexNumber = 0;
  colmnIndexNumber =0;
  bccl = "";
  nl.textContent = "ok?"
  bingoNumberBoard.removeChild(tbody);
}