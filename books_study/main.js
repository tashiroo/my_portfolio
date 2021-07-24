'use scrict';

// 日付データの取得 clickイベント

const btn = document.getElementById("btn");
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
let hour = now.getHours();
const min = now.getMinutes();
if(hour +1 >= 12){
  hour = `${hour -12}:${min}p.m`;
}else{
  hour = `${hour}:${min}a.m`;
}
const to = `${year}/${month +1}/${date} ${hour}`;
btn.addEventListener('click',function(){
  document.getElementById("choice").textContent = to;
});



// const number = Math.floor(Math.random() * 6);

// const answer = parseInt(window.prompt("数あてゲーム"));

// let message;

// if(number == answer){
//   message = "あたり";
// }else if(answer < number){
//   message = "もっと大きい";
// }else if(answer > number){
//   message = "もっと小さい";
// }else{
//   message ="数字を入れるんだ！"
// }

// window.alert(message);

// ダイアログの表示

// if(window.confirm("ゲームをはじめるよOK?")){
//   console.log("ゲームスタート");
// }else{
//   console.log("ゲームしない");
// }

// let answer = window.prompt("ヘルプを見る？");
// console.log(answer);

// 条件式１
// if(answer == "yes"){
  //   window.alert("障害物をジャンプしてよけるんだ！タップしてジャンプだ！")
  // }else if(answer =="no"){
    //   window.alert("おーけーはじめよう")
    // }else {
      //   window.alert("答えはyesかnoだ！いいね？")
      // }
      
// 条件式２
// const hour = new Date().getHours();

// if(hour == 9 || hour == 15){
//   window.alert("お弁当買うと今ならお茶が一本おまけだよ")
// }else if(hour >=19 && hour < 21){
//   window.alert("タイムセールお弁当半額！")
// }else {
//   window.alert("いらっしゃい！お弁当はいかがです？")
// }

// モンスターを倒そう

// let enemy = 100;
// let count =0;

// window.alert("敵だ倒せ！");

// console.log("モンスターだ");
// while(enemy > 0){
//   const attack = Math.floor(Math.random() * 30) +1;
//   console.log(`モンスターに${attack}のダメージ`);
//   enemy -= attack;
//   count++;
// }
// console.log(`やっつけた${count}回攻撃した`);

// function total(price){
//   const tax = 0.1;
//   return price + price * tax;
// }

// console.log(`商品の値段は${total(8000)}円です`);

// document.getElementById("output").textContent = `商品の値段は${total(8000)}円です`;


// const todo = ["デザイン作成","データ整理","勉強会申し込み","牛乳買う"];

// todo.push("歯医者に行く");

// for(let item of todo){
//   const li  = `<li>${item}</li>`;
//   document.getElementById("list").insertAdjacentHTML("beforeend",li);
// }

// let jsbook = {title:"JavaScript",price:2500,stock:3};

// for(let p in jsbook){
//   console.log(`${p}=${jsbook[p]}`);
// }

// document.getElementById("title").textContent = jsbook.title;
// document.getElementById("price").textContent = `${jsbook.price}円`;
// document.getElementById("stock").textContent = jsbook.stock;

// document.getElementById("form").onsubmit = function(event){
//   event.preventDefault();
//   const search = document.getElementById("form").word.value;
//   document.getElementById("output").textContent = `[${search}]の検索...`;
// }
// document.getElementById("pi").textContent = Math.PI;
// document.getElementById("floor").textContent = Math.floor(Math.PI);

// function point(num, digit){
//   const mover = 10 ** digit;
//   return Math.floor(num * mover) / mover;
// }

// document.getElementById("oput").textContent = point(Math.PI,2);

//カウントダウンタイマー
function countdown(due){
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [days, hours, min ,sec];

  return count;
}
let goal = new Date(2025,4,3);
// goal.setHours(23);
// goal.setMinutes(59);
// goal.setSeconds(59);

function recalc(){
  const counter = countdown(goal);
  // const time = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
  // document.getElementById("timer").textContent =time;
  document.getElementById("day").textContent = counter[0];
  document.getElementById("hour").textContent = counter[1];
  document.getElementById("min").textContent = String(counter[2]).padStart(2,"0");
  document.getElementById("sec").textContent = String(counter[3]).padStart(2,"0");
  refresh(); 
}


function refresh(){
setTimeout(recalc,1000);
}

recalc();
