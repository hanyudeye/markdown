# Vue.js
## 组件
``` js
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

## 模板

jsx 语法 
``` jsx
Vue.component('buttonclicked', {
  props: ["initial_count"],
  data: function() {var q = {"count": 0}; return q;} ,
  render: function (h) {
    return (<button vOn:click={this.onclick}>Clicked {this.count} times</button>)
  },
  methods: {
    "onclick": function() {
      this.count = this.count + 1;
    }
  },
  mounted: function() {
    this.count = this.initial_count;
  }
});

```
## 单文件组件
为了更好地适应复杂的项目，Vue支持以.vue为扩展名的文件来定义一个完整组件，用以替代使用Vue.component注册组件的方式。

> 开发者可以使用 Webpack或Browserify等构建工具来打包单文件组件。


# 使用
## 安装
独立版本
> 直接下载并用 <script> 标签引入，Vue 会被注册为一个全局变量。

NPM
> 大型项目中使用，可以与 webpack 或 Browserify 配合使用

## 表单数据与应用状态的双向绑定
``` html
<input v-model="name">
<span v-bind:title="message">鼠标悬停 title 属性显示</span>

```

## 条件与循环
``` html
<p v-if="seen">现在你看到我了</p>

<ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
```



## vue对象操作 [直接数据操作]
``` js
app4.todos.push({ text: '新项目' })
```

## 处理用户输入
``` html
<!-- 反转消息 -->
<p>{{ message }}</p>
<button v-on:click="reverseMessage">反转消息</button>
```

``` js
 methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
```
