# vue
前台动态内容的显示有两种方式，一种是后台拼接，另一种是前台拼接，vue 完成的是前台拼接的功能。

## 拼接元素与数据关联 (跟 jQuery 一样用选择器化) 对选择器中的对象进行Vue化

Vue对象包含的东西

- el
- data
- methods
- 事件 created mounted(元素挂载时执行) updated,destoryed
- 


``` js
let vm= new Vue({
  el: ".app1",
  data: {
    name: "阿明",
  },
  methods: {},
  created: function () {
    console.log("Vue instance has been created");
  },
  filters:{
	  upper:function(value){
		  return value.toUpperCase();
	  }
  }
});

```
## 模板语法
### 插入内容
#### 文本  {{datavar}}
#### html 
``` html
 <div v-html="message"></div>
```
#### 属性 
``` html
插入属性: <span v-bind:style="style1">hello</span> <br>
```
#### 表达式
``` html
{{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>

```

### 指令 
判断
``` html
<p v-if="seen">现在你看到我了</p>
```
### 数据与表单形成关联
``` html
<input v-model="message">
```

v-model与 input ,select ,textarea,checkbox,radio 等表单形成关联
### 与事件属性关联 v-on
方法放在 methods 中
### 过滤filters  {{ a | b}}




## 条件
### v-if  等价于后台模板的写法 {{#if }} {{/if}}
### v-else
``` html
<div id="app">
    <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>
</div>

```
## vue-cli
``` shell
vue init webpack my-project
cd my-project
npm install
npm run dev
```
