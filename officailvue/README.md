## How to Study Vue

https://jp.vuejs.org/v2/guide/installation.html

- ドキュメント読む

- 理解が深そうなとこ
 - コンパイラ: テンプレート文字列を JavaScript レンダリング関数にコンパイルするためのコードです。
 - 開発モードと本番モードの違い
 - ライフサイクルフックが覚えるの大変そう
 　└　Init → el →　Mounted　→　Destory
 - v-bind 省略記法(:), v-on 省略記法(@)
 - 算出プロパティはリアクティブな依存関係にもとづきキャッシュされると書いてあれるが
   メソッドと違いがわからない。
 - v-show は <template> 要素をサポートせず、v-else とも連動しないということに注意してください
 　└　使い所は？？
　 └  v-if は 遅延描画 (lazy) です。 初期表示において false の場合、何もしません。
      条件付きブロックは、条件が最初に true になるまで描画されません。
      とても頻繁に何かを切り替える必要があれば v-show
- v-if と v-for を同時に利用することは 推奨されません
- v-on:click.onceを使う
- v-modelは双方向バインド




