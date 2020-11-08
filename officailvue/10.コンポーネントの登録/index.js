// button-counter と呼ばれる新しいコンポーネントを定義します
// 先に定義しないと行けない
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
//コンポーネントの編成
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({ el: '#components-demo' ,
  data: {
    //プロパティを使用した子コンポーネントへのデータの受け渡し
    posts: [
      { id: 1, title: 'data post My journey with Vue' },
      { id: 2, title: 'data post Blogging with Vue' },
      { id: 3, title: 'data post Why Vue is so fun' }
    ]
  }
}
)