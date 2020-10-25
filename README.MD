#### How to dev tool install 

npm install -g @vue/devtools
vue-devtools

#### How to CLI install

npm install -g @vue/cli
npm install -g @vue/cli-service-global

vue serve

#### How to Create Project

$ vue create hello_app
$ cd hello_app
$ npm run serve

#### How to Build

$ npm run build

Check dist Folder

$ npm run build

#### How to Vue UI

$ vue ui 

- プロジェクト作成
- インポート
- 依存関係の確認
- タスクの確認（サーバー起動、ビルド）

#### Caution 

{{ }}  = 複雑な式を書きすぎないこと

render は、画面表示の処理を複雑なのに対応できる

仮想DOMが生成された後、実際のDOMが実装される

Vue Componentで独自タグ作れるけど、Renderとどっちが良い？

Computedとイベントハンドラの違い

Vue Componentをわざわざ書かなくてもVueファイルで書く

プロジェクトのindex.htmlはJSの処理がない
