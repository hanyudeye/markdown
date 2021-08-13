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

### 指令 带有 v- 前缀的特殊属性
``` html
<p v-if="seen">现在你看到我了</p>
```
### 用户输入
``` html
<input v-model="message">
```
看到这里  https://www.runoob.com/vue2/vue-template-syntax.html
### 过滤器
### 缩写

## 数据操作 (Vue实例的数据使用 )  {{}}
直接数据绑定  {{dataname}}  ==  v-bind (用于标签节点类型中，简写 :) 

## filters 删选  {{dataname |upper }}
## 输出 Raw HTML
## 表单绑定


## vue-cli
``` shell
vue init webpack my-project
cd my-project
npm install
npm run dev
```
