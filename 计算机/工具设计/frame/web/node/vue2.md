https://github.com/hardphp/tp6-vue-admin.git
vue 绑定 link

https://github.com/icarusion/vue-book

# Vue2
 > 处理SPA(单页面富应用)  
 > 复杂应用  （单 Vue 文件 + webpack + [vuex 管理状态] +[vue-router 管理路由])   

## jQuery 与 Vue 区别
jQuery
``` js
if(showBtn){
var btn=$('<button>Click me</button>');
btn.on('click',function(){});

$('#app').append(btn);

}

```

Vue
```
<div id="app">
<button v-if="showBtn" v-on:click="handleClick">Click me</button>
</div>

<script>
new Vue({
el:'#app',
data:{
showBtn:true
}
});

</script>

```


## 对象

- el (用来绑定模板 )
- data
- methods
- 生命周期 created mounted(元素挂载时执行) updated,beforeDestory,destoryed


``` js
new Vue({
  el: ".app1",
  data: {
    name: "aming",
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



## 模板
### 内容
#### 文本节点
```
{{datavar}}
```
#### html 
``` html
 <div v-html="message"></div>
```
#### 属性 
``` html
<span v-bind:style="style1">属性</span>
<div v-bind:id="'list-' + id">ID</div>
```
#### 表达式
``` html
{{5+5}}<br>
{{ ok ? 'YES' : 'NO' }}<br>
{{ message.split('').reverse().join('') }}

```

### 指令 
#### 判断
``` html
 <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
```
#### 循环
``` html
<li v-for="site in sites">
      {{ site.name }}
    </li>
```

### 数据与表单形成关联
``` html
<input v-model="message">
```

v-model与 input ,select ,textarea,checkbox,radio 等表单形成关联
### 与事件属性关联 v-on
方法放在 methods 中
### 过滤filters  {{ a | b}}

### 条件 ###
#### v-if  等价于后台模板的写法 {{#if }} {{/if}} ####

#### v-else ####

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

#### 监听属性 watch ####

``` html
<div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
</div>
<script type = "text/javascript">
var vm = new Vue({
    el: '#app',
    data: {
        counter: 1
    }
});
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
</script>
``` 

#### 样式绑定 ####

##### class #####

实例中将 isActive 设置为 true 显示了一个绿色的 div 块，如果设置为 false 则不显示：
``` html
<div v-bind:class="{ 'active': isActive }"></div>
``` 
用数组处理多种 class
``` html
<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>
```

##### style #####

``` html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div>
<!-- 或者绑定样式对象 -->
<div v-bind:style="styleObject">菜鸟教程</div>
```

### 事件 ###

#### 事件修饰符 ####

``` html
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- click 事件只能点击一次，2.1.4版本新增 -->
<a v-on:click.once="doThis"></a>
``` 

#### 按键修饰符 ####

``` html
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">
记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
<!-- 同上 -->
<input v-on:keyup.enter="submit">
<!-- 缩写语法 -->
<input @keyup.enter="submit">
``` 
别名
```
.enter
.tab
.delete (捕获 "删除" 和 "退格" 键)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta
``` 

### 表单 v-model 双向绑定 ###

修饰符

#### .lazy ####

在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：

``` html
<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model.lazy="msg" >
```

#### .number ####

如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：
``` html
<input v-model.number="age" type="number">
```
这通常很有用，因为在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。

#### .trim ####

如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：
``` html
<input v-model.trim="msg">
```


## vue-cli
### 创建项目
``` shell
vue init webpack MY-PROJECT
cd MY-PROJECT
npm install
npm run dev
```


### file structure

- index.html     #main app file
- src/App.vue   #Component  
- src/main.js  #drive file
- src/assets/logo.png
- src/components/HelloWorld.vue   # 另一个组件，被App.vue 包含

### 添加 plugins
``` console
vue add @vue/cli-plugin-babel
```


# link
  <a :href="'addalarmnotes.do?alarmId='+item.id+'&activetype1=detail'" target="_blank">{{item.name}}</a>
