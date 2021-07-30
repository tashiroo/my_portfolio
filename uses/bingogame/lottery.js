
// ビンゴの抽選
    let bingo = [];
    let bingo2 = [];
    let bingo3 = [];
    let counter = 100;
    let score = 0;
    let bingoVerification = ["●","●","●","●","●"];
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
    console.log(bingo3.indexOf(number));
    counter--;
  }
}

// ビンゴカードの作成
for(let i = 0;i < 15;i++){
  bingo2.push(i)    
}
for(let a = 0;a <1;a++){
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
    
    
    console.log(bingo3);
    // テーブル内のデータの取得→ビンゴカードの当たった数字の書き換えに使う
    console.log(document.querySelector("table").rows[1].cells[1].firstChild.data);