// phina.js をグローバル領域に展開
phina.globalize();

let ASSETS = {
  image: {'tomapiko': 'https://rawgit.com/phi-jp/phina.js/develop/assets/images/tomapiko.png',
},
};


// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    // 背景色を指定
    this.backgroundColor = 'skyblue';
    // ラベルを生成
    let circle = CircleShape({
      x: this.gridX.center(),
      y: this.gridY.center(),
      radius:100,
      fill:'blue',
    }).addChildTo(this);
  
    let sprite = Sprite('tomapiko').addChildTo(this);
    sprite.x = this.gridX.span(1);
    sprite.y = this.gridY.span(1);

    this.onpointmove = function(e) {
      sprite.x = e.pointer.x;
      sprite.y = e.pointer.y;
    };

    this.update = function(kbs){
      let key = kbs.keyboard;
      let sd = 5;
      if(key.getKey('left')){sprite.x -= sd;}
      if(key.getKey('right')){sprite.x += sd;}
      if(key.getKey('up')){sprite.y -= sd;}
      if(key.getKey('down')){sprite.y += sd;}
      let c = Circle(sprite.x, sprite.y, sprite.radius);

      if (Collision.testCircleCircle(c, circle)){
        circle.fill = 'red';
      }
      else{
        circle.fill = 'blue';
      }
    };
  },
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    assets:ASSETS,
    // startLabel: 'main', // メインシーンから開始する
  });
  // アプリケーション実行
  app.run();
});
